from fastapi import FastAPI

from app.database import Base, engine
from app.routes.feedback import router as feedback_router

Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Anon Feedback API",
    description="Anonymous company feedback API",
    version="1.0.0",
)


app.include_router(feedback_router)


@app.get("/health")
def health_check():
    return {"status": "healthy"}
