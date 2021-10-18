from flask import Flask


app = Flask(__name__)

# members api route


@app.route("/members")
def members():
    return {"members": ["membre1", "member2", "member3"]}


if __name__ == "__main__":
    app.run(debug=True)
