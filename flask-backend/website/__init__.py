from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from os import path
from flask_login import LoginManager
from flask_cors import CORS

db = SQLAlchemy()
ma = Marshmallow()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'asasasasaa'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'secret'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    ma.init_app(app)
    CORS(app)
    
    from .auth import auth
    from .user_friends import user_friends
    from .comments import comments
    from .posts import posts

    app.register_blueprint(auth, url_prefix='/')
    app.register_blueprint(user_friends, url_prefix='/')
    app.register_blueprint(comments, url_prefix='/')
    app.register_blueprint(posts, url_prefix='/')

    from .models import Friend

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    create_database(app)

    return app


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')
    else:
        print('Database already exists!')