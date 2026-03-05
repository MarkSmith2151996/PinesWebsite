from http.server import HTTPServer, BaseHTTPRequestHandler

class RedirectHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(302)
        self.send_header('Location', 'https://pines-v2.vercel.app' + self.path)
        self.end_headers()
    def log_message(self, format, *args):
        pass

HTTPServer(('0.0.0.0', 3000), RedirectHandler).serve_forever()
