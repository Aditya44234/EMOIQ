from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# List of emotions and their confidence scores to pick randomly 
EMOTIONS = [
    ("Happy", 0.92),
    ("Sad", 0.78),
    ("Anxious", 0.85),
    ("Excited", 0.88),
    ("Calm", 0.80),
    ("Angry", 0.75)
]

# Route to analyze the emotion of the text
@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')
    # Mock analysis: pick a random emotion from the list
    emotion, confidence = random.choice(EMOTIONS)
    return jsonify({
        "emotion": emotion,
        "confidence": confidence
    })


# For me to run the app locally
if __name__ == '__main__':
    app.run(debug=True)
