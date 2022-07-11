from flask import Flask,request,Response,send_file
import os

def after_request(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

app = Flask(__name__)
app.after_request(after_request)

@app.route('/')
def hello_world():  # put application's code here
    # print('request')
    return request.method
    # if request is None:
    #     return 'Hello World!'
    # else:
    #     return 'xxxx'

@app.route("/upload", methods=['GET', 'POST'])
def getFile():
    print(request.files)
    fileStorage = request.files['file']
    # file_name = request.files.get("file").filename.replace(" ", "")
    # print('1' + fileStorage.filename)
    # print('2' + fileStorage.name)
    fileStorage.save('static/'+fileStorage.filename)
    return 'success'

@app.route('/video')
def test():
    # print( request.method)
    # print(request)
    filename = 'static/test.mp4'
    fileSize = os.path.getsize(filename)
    f = open(filename,'rb')
    f.seek(request.range.ranges[0][0])
    headers = {
        'Accept-Range':'bytes',
        'Content-Length': fileSize,
        'Content-Range': request.range.to_content_range_header(fileSize)
        # 'Content-Range': 'bytes {0}-{1}/{2}'.format(0,fileSize-1,fileSize)
    }
    return Response(f,206,headers,content_type='video/mp4')
    # print(request.range.range_for_length(fileSize))
    # return send_file('static/test.mp4')

if __name__ == '__main__':
    app.run()
