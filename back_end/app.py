from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
import mysql.connector

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# MySQL configurations
app.config["MYSQL_USER"] = "backend"
app.config["MYSQL_PASSWORD"] = "backend_password"
app.config["MYSQL_DB"] = "quest_tracker"
app.config["MYSQL_CURSORCLASS"] = "DictCursor"

mysql = MySQL(app)


@app.route("/users", methods=["POST"])
def create_user():
    name = request.json["name"]
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO users(name) VALUES(%s)", [name])
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "User created successfully"}), 201


@app.route("/quests", methods=["POST"])
def create_quest():
    user_id = request.json["user_id"]
    name = request.json["name"]
    status = request.json["status"]
    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO quests(user_id, name, status) VALUES(%s, %s, %s)",
        [user_id, name, status],
    )
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Quest created successfully"}), 201


@app.route("/quests", methods=["GET"])
def get_quests():
    user_id = request.args.get("user_id")
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM quests WHERE user_id = %s", [user_id])
    quests = cur.fetchall()
    cur.close()
    return jsonify(quests)


if __name__ == "__main__":
    app.run(debug=True)
