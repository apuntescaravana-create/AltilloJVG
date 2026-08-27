import socket

# Generate variants of the project ID based on visual ambiguities
# Possibilities:
# Start: "nfpmrjvdjzyz"
# Mid: "jzk" or "jzkjs" or "jzkjs" or "zjsk" or "zjskjs" or "zjskm" or "zjs" or "zjk"
# End: "miqt" or "mniqt" or "miqt" or "mniqt"

base_start = "nfpmrjvdjzyz"
mid_options = ["jzk", "jzkj", "jzkjs", "zjsk", "zjskj", "zjskjs", "zjs", "zjk", "z", "j", "s", "k", "zjskmiqt", "zjskmniqt", "zjskm", "zjk"]

# Let's just generate some logical combinations of the cropped text:
# Visual candidates:
# 1. nfpmrjvdjzyzjzkmiqt
# 2. nfpmrjvdjzyzjzkmniqt
# 3. nfpmrjvdjzyzjzyzjskmiqt
# 4. nfpmrjvdjzyzjzyzjskmniqt
# 5. nfpmrjvdjzyzjskmiqt
# 6. nfpmrjvdjzyzjskmniqt
# 7. nfpmrjvdjzyzjzjskmiqt
# 8. nfpmrjvdjzyzjzjskmniqt
# 9. nfpmrjvdjzyzjzkmsiqt
# 10. nfpmrjvdjzyzjzkmsmniqt
# 11. nfpmrjvdjzyzjzyzjskmip
# 12. nfpmrjvdjzyzjzyzjskmiqt
# Let's list candidates from the crop:
candidates = [
    "nfpmrjvdjzyzjzkmiqt",
    "nfpmrjvdjzyzjzkmniqt",
    "nfpmrjvdjzyzjskmiqt",
    "nfpmrjvdjzyzjskmniqt",
    "nfpmrjvdjzyzjzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmigt",
    "nfpmrjvdjzyzjzkmsiqt",
    "nfpmrjvdjzyzjskmsiqt",
    "nfpmrjvdjzyzjzyzjskmigt",
    "nfpmrjvdjzyzjzyzjskmiqt",
    "nfpmrjvdjzyzjskmiqt",
    "nfpmrjvdjzyzjzkmiqt",
    "nfpmrjvdjzyzjzkmniqt",
    "nfpmrjvdjzyzjskmiqt",
    "nfpmrjvdjzyzjskmniqt",
    "nfpmrjvdjzyzjzyzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmniqt",
    "nfpmrjvdjzyzjskmiqt",
    "nfpmrjvdjzyzjskmniqt",
    "nfpmrjvdjzyzjskmsiqt"
]

# Let's programmatically construct variations by looking at the ASCII representation:
# 'n f p m r j v d j z y z' followed by some letters, followed by 'm i q t' or 'm n i q t'
# The ASCII characters after 'n f p m r j v d j z y z' are:
# col 13: j
# col 14: z (or s or y)
# col 15: y (or z or j or s)
# col 16: z (or y or j)
# col 17: j
# col 18: s (or z or k)
# col 19: k
# col 20: m
# col 21: i
# col 22: q
# col 23: t
# This would be: "nfpmrjvdjzyzjzyzjskmiqt"
# Let's add variants of this:
variants = [
    "nfpmrjvdjzyzjzyzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmniqt",
    "nfpmrjvdjzyzjzyzjskmigt",
    "nfpmrjvdjzyzjzkmsiqt",
    "nfpmrjvdjzyzjzkmiqt",
    "nfpmrjvdjzyzjzkmniqt",
    "nfpmrjvdjzyzjskmiqt",
    "nfpmrjvdjzyzjzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmiqt",
    "nfpmrjvdjzyzjzyzjskmigt"
]

# Let's try a Cartesian product of possible parts:
part1 = ["nfpmrjvdjzyz"]
part2 = ["jzk", "jzkj", "jzkjs", "zjsk", "zjskj", "zjskjs", "zjs", "zjk", "z", "j", "s", "k", "zjskm", "zjk", "jzyzjsk", "jzyzjs", "jzyzjsk", "jzyzjs"]
part3 = ["miqt", "mniqt", "migt", "mngqt"]

for p1 in part1:
    for p2 in part2:
        for p3 in part3:
            variants.append(f"{p1}{p2}{p3}")

unique_variants = sorted(list(set(variants)))
print(f"Testing {len(unique_variants)} unique domain variants...")

for variant in unique_variants:
    domain = f"{variant}.supabase.co"
    try:
        ip = socket.gethostbyname(domain)
        print(f"🎉 SUCCESS! Found resolving domain: {domain} -> {ip}")
    except socket.gaierror:
        pass
print("DNS testing complete.")
