import http.client
import json

connection = http.client.HTTPSConnection("api.twitch.tv")
payload = ''
headers = {
    'Client-Id': 'token',
    'Authorization': 'Bearer token'
}


def get_streamers():
    connection.request("GET", "/helix/streams?game_id=1469308723&language=fr", payload, headers)
    response = connection.getresponse()
    data = response.read()
    data = json.loads(data.decode("utf-8"))["data"]
    for streamer in data:
        streamer["thumbnail_url"] = str(streamer["thumbnail_url"]).replace("{width}", "200").replace("{height}", "128")
    return data

