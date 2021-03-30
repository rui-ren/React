from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/udacity'

# instance of my database
db = SQLAlchemy(app)
    
# db.Model
class Person(db.Model):
    __tablename__ = 'persons'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    
    # define the print method inside here!
    def __repr__(self):
        return f'<Person ID: {self.id}, name: {self.name}>'
    
# If not exist , then generate the table!
db.create_all()

@app.route('/')
def index():
    person = Person.query.first()
    
    print(person, '...ss')
    return 'Hell World' + ' ' + str(person.name)
    
person = Person(name='Amy')
db.session.add(person)
db.session.commit()

if __name__ == "__main__":
    
    app.run()
    