from flask import Flask,request,redirect,url_for,render_template,session,jsonify
import os 
app=(Flask(__name__))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/summarize',methods=['POST'])
def summarize():
    if 'pdf' not in request.files:
        return jsonify ({"erorr":"No file Uploaded"}),400
    file=request.files["pdf"]
    filename=file.filename
    # ⚠️ For now: fake summary instead of ML
    summary = "This is a dummy summary with citations [1], [2]."
    citations = {
        "1": "Source: Research Paper A",
        "2": "Source: Research Paper B"
    }
    return jsonify({"summary":summary,"citations":citations,"filename":filename})

if (__name__)=="__main__":
    app.run(debug=True)