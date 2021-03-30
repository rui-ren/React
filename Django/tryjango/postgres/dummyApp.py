from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='templates')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/udacity' 
db = SQLAlchemy(app)

class Todo(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)
    # print attributes
    def __repr__(self):
        return f'<Todo {self.id} {self.description}>'

db.create_all()

@app.route('/')
def index():
    
    return render_template('index.html', data=Todo.query.all())

if __name__ == '__main__':
    
    app.run()