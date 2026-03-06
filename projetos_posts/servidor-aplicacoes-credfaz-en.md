---
title: "Corporate Application Server — Containerized Infrastructure"
date: "2025-02-01"
author: "Emanuel Araújo"
summary: "Corporate infrastructure project with Docker, Nginx Reverse Proxy, and wildcard SSL certificates via AD CS. Standardized environment with multiple internal applications in isolated containers."
tags: ["Docker", "Nginx", "Linux", "SSL/TLS", "Active Directory", "Infrastructure"]
liveUrl: "#"
repoUrl: "#"
lang: "en"
---

## Overview

Project to create a **central internal application server** for a financial cooperative, using **Docker**, **Nginx Reverse Proxy**, and **corporate SSL certificates** issued by AD CS (Active Directory Certificate Services).

The goal was to build a secure, standardized, and scalable infrastructure that centralizes internal applications with access via internal domains, ensuring isolation between services and compliance with security best practices.

## Base Infrastructure

| Component | Detail |
|---|---|
| **System** | Linux Server |
| **Virtualization** | Docker + Docker Compose |
| **Proxy** | Nginx Reverse Proxy |
| **Hardware** | Ryzen 5 5600G, 16GB RAM |
| **Network** | Dedicated VLAN, segmented access |

## Docker Architecture

Containers deployed in an isolated Docker network (`proxy_net`):

- **nginx_proxy** — Central reverse proxy with TLS termination
- **Portainer** — Visual container management
- **Vaultwarden** — Corporate password manager
- **Snipe-IT** — IT asset management (ITAM) + MariaDB
- **Internal system** — Isolated corporate application (Adianti)

## Corporate SSL Certificates

**Wildcard** certificate `*.srv.credfaz.org.br` generated via:

1. OpenSSL → CSR (Certificate Signing Request)
2. AD CS → Corporate signing
3. Installation in `/opt/nginx/ssl`
4. Usage across all services via Nginx

## Implemented Security

- **TLS 1.2/1.3** exclusively on all connections
- **Security headers** (HSTS, X-Content-Type, X-Frame-Options)
- **Hardened containers** with `no-new-privileges`, `cap_drop`, `read_only`
- **Sensitive directory blocking** in Nginx
- **Internal DNS** configured in Active Directory

## DNS and Access

DNS records created in AD for internal domain access:

```
os.srv.credfaz.org.br      → Internal System
senhas.srv.credfaz.org.br   → Vaultwarden
ativos.srv.credfaz.org.br   → Snipe-IT
```

## Final Architecture

```
Active Directory DNS
        │
        │ *.srv.credfaz.org.br
        ▼
   Nginx Reverse Proxy (TLS)
        │
        ├── Vaultwarden (passwords)
        ├── Snipe-IT (assets)
        ├── Internal System (corporate)
        └── Portainer (management)
```

## Problems Solved

- Docker port conflicts resolved with dedicated bridge network
- Untrusted certificates → certificate chain configuration via AD CS
- Snipe-IT 500 error → MySQL variables corrected
- Chrome certificate cache → HSTS flush
- NXDOMAIN DNS → A records correctly created in AD

## Result

Modern corporate infrastructure based on containers with **corporate SSL**, **central reverse proxy**, **isolated services**, and **standardized domains**. Architectural model aligned with medium and large enterprise practices.
