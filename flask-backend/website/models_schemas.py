from .models import *
from . import ma


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User


class FriendSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Friend


class PostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Post


class CommentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Comment
