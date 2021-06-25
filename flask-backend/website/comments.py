from flask import Blueprint, request, jsonify
from .models import Comment
from .models_schemas import CommentSchema
from flask_login import current_user
from . import db

comments = Blueprint('comments', __name__)


@comments.route('/commentslist', methods=['GET'])
def comments_list():
    results = Comment.query.all()
    comment_schema = CommentSchema(many=True)
    output = comment_schema.dump(results)

    return jsonify({'comments': output})


@comments.route('/commentslist/<int:postid>', methods=['GET'])
def comments_list_of_post(postid):
    results = Comment.query.filter(Comment.post_id == postid).all()
    comment_schema = CommentSchema(many=True)
    output = comment_schema.dump(results)

    return jsonify({'comments': output})


@comments.route('/addcomment', methods=['POST'])
def add_post():
    if request.method == 'POST':
        content = request.form.get('content')

        new_comment = Comment(post_id=1, user_id=current_user.user_id, content=content)
        db.session.add(new_comment)
        db.session.commit()
