from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://s106:82xqy4ee@labagh/s106'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    name = db.Column(db.String(30))
    surname = db.Column(db.String(30))
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, name, surname):
        self.name = name
        self.surname = surname

@app.route('/', methods = ['GET'])
def main():
    return jsonify({"Hello":"World"})

if __name__ == "__main__":
    app.run(debug=True)