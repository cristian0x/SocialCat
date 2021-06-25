from flask import Blueprint, request, jsonify
from .models import Post
from .models_schemas import PostSchema
from flask_login import current_user
from . import db

posts = Blueprint('posts', __name__)


@posts.route('/postslist', methods=['GET'])
def posts_list():
    results = Post.query.all()
    post_schema = PostSchema(many=True)
    output = post_schema.dump(results)

    return jsonify({'posts': output})


@posts.route('/postslist/<int:userid>', methods=['GET'])
def posts_list_of_user(userid):
    results = Post.query.filter(Post.user_id == userid).all()
    post_schema = PostSchema(many=True)
    output = post_schema.dump(results)

    return jsonify({'posts': output})


@posts.route('/addpost', methods=['POST'])
def add_post():
    if request.method == 'POST':
        content = request.form.get('content')

        new_post = Post(user_id=current_user.user_id, content=content)
        db.session.add(new_post)
        db.session.commit()
