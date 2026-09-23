from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.feedback import Feedback
from app.schemas.feedback import FeedbackCreate, FeedbackResponse

router = APIRouter(
    prefix="/api/feedback",
    tags=["Feedback"],
)


@router.post(
    "/",
    response_model=FeedbackResponse,
)
def create_feedback(
    feedback: FeedbackCreate,
    db: Session = Depends(get_db),
):
    new_feedback = Feedback(
        company=feedback.company,
        content=feedback.content,
    )

    db.add(new_feedback)
    db.commit()
    db.refresh(new_feedback)

    return new_feedback


@router.get(
    "/{company}",
    response_model=list[FeedbackResponse],
)
def get_feedback(
    company: str,
    db: Session = Depends(get_db),
):
    return (
        db.query(Feedback)
        .filter(Feedback.company == company)
        .order_by(Feedback.created_at.desc())
        .all()
    )
