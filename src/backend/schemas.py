from pydantic import BaseModel, EmailStr

class UserLogin(BaseModel):
    email_user: EmailStr
    pass_user: str