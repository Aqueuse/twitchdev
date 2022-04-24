from flask import Flask, render_template

import get_streamers_from_twitch

app = Flask(__name__)


@app.route('/')
def show_streamers():
    # refresh db
    return render_template("home.html", data=get_streamers_from_twitch.get_streamers())


@app.route('/iframe')
def iframe():
    return render_template("iframe.html")


if __name__ == '__main__':
    app.run()
