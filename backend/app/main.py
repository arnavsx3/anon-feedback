from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes.feedback import router as feedback_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Anon Feedback API",
    description="Anonymous company feedback API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(feedback_router)


@app.get("/health")
def health_check():
    return {"status": "healthy"}
