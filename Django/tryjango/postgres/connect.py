import psycopg2

# we connect to a database
conn = psycopg2.connect('dbname = udacity user=postgres')

# we open a session here
cursor = conn.cursor()

cursor.execute('DROP TABLE IF EXITS table2;')

cursor.execute('''
    CREATE TABLE table2 (
        id SERIAL PRIMARY KEY,
        completed BOOLEAN NOT NULL DEFAULT false
    );
''')

cursor.execute('''

    INSERT INTO table2 (id, completed) VALUES
    (1, true);
''')

cursor.execute('INSERT INTO table2 (id, completed) VALUES
        (%s, %s);', (1, True));

SQL = 'INSERT INTO table2 (id, completed) VALUES (%(id)s, %(completed)s);'

data = {
    'id': 2,
    'completed': False    
    }

cursor.execute(SQL, data)


cursor.execute('SELECT * FROM table2')

result = cursor.fetchall()

print(result)

conn.commit()

conn.close()
cursor.close()

