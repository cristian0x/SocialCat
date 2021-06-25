from flask import Blueprint, request, jsonify
from .models import User, Friend
from .models_schemas import UserSchema, FriendSchema
from . import db

user_friends = Blueprint('user_friends', __name__)


@user_friends.route('/friendslist', methods=['GET'])
def users_list():
    results = Friend.query.all()
    friend_schema = FriendSchema(many=True)
    output = friend_schema.dump(results)

    return jsonify({'friends': output})


@user_friends.route('/friendslist/<int:userid>', methods=['GET'])
def friends_list_of_user(userid):
    results = Friend.query.filter((Friend.user1 == userid) | (Friend.user2 == userid)).all()
    friend_schema = FriendSchema(many=True)
    output = friend_schema.dump(results)

    return jsonify({'friends': output})
