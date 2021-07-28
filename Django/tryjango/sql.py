
class Driver(db.Model):
    __tablename__ = 'drivers'
    id = db.Column(db.Integer, primary_key=True)

    vehicles = db.relationship('Vehicle', backref='driver', lazy=True)

class Vehicle(db.Model):
    __tablename__ = 'vehicles'
    id = db.Column(db.Integer, primary_key=True)
    make = db.Column(db.String(), nullable=False)
    
    driver_id = db.Column(db.Integer, db.ForeignKey('drivers.id'), nuallable=False)
    