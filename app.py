from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Read data from CSV file with explicit encoding
    data = pd.read_csv('data.csv', encoding='latin1').to_dict(orient='records')

    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run(debug=True)
