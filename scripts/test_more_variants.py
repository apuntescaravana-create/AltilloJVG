import socket

base = "nfpmrjvdjzyz"
mids = ["jzk", "jzh", "jzx", "jzs", "jz", "js", "jzkjs", "zjsk", "zjs", "zjk", "jzkj", "jzkms", "zjskm"]
ends = ["miqt", "mniqt", "migt", "mngqt"]

candidates = []
for m in mids:
    for e in ends:
        candidates.append(f"{base}{m}{e}")

# Let's also check if there is an 'n' after base:
# "nfpmrjvdjzyzjzkmniqt"
candidates.append("nfpmrjvdjzyzjzkmniqt")
candidates.append("nfpmrjvdjzyzjzkmiqt")

# Check all
for c in sorted(list(set(candidates))):
    domain = f"{c}.supabase.co"
    try:
        ip = socket.gethostbyname(domain)
        print(f"🎉 YES! {domain} -> {ip}")
    except socket.gaierror:
        pass
print("Done checking variants.")
