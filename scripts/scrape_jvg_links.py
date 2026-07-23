import urllib.request
import re

url = 'http://institutojvgonzalez.buenosaires.edu.ar/index.php'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as res:
        html = res.read().decode('utf-8', errors='ignore')

    links = set(re.findall(r'href=[\"\'](.*?)[\"\']', html))
    print(f"Total links found: {len(links)}")
    for l in sorted(links):
        if not l.startswith('http'):
            l = 'http://institutojvgonzalez.buenosaires.edu.ar/' + l.lstrip('/')
        print(l)
except Exception as e:
    print('Error:', e)
