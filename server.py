from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


PORT = 8000
DIST_DIRECTORY = Path(__file__).resolve().parent / "dist"


def main() -> None:
    if not (DIST_DIRECTORY / "index.html").exists():
        raise SystemExit("dist/index.html tidak ditemukan. Jalankan npm run build.")

    handler = partial(SimpleHTTPRequestHandler, directory=str(DIST_DIRECTORY))
    server = ThreadingHTTPServer(("0.0.0.0", PORT), handler)
    print(f"Portfolio aktif di http://localhost:{PORT}")
    print("Tekan Ctrl+C untuk menghentikan server.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
