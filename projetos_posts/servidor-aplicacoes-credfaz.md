---
title: "Servidor de Aplicações Corporativo — Infraestrutura Containerizada"
date: "2025-02-01"
author: "Emanuel Araújo"
summary: "Projeto de infraestrutura corporativa com Docker, Nginx Reverse Proxy e certificados SSL wildcard via AD CS. Ambiente padronizado com múltiplas aplicações internas em containers isolados."
tags: ["Docker", "Nginx", "Linux", "SSL/TLS", "Active Directory", "Infraestrutura"]
liveUrl: "#"
repoUrl: "#"
lang: "pt"
---

## Visão Geral

Projeto de criação de um **servidor central de aplicações internas** para uma cooperativa financeira, utilizando **Docker**, **Nginx Reverse Proxy** e **certificados SSL corporativos** emitidos pelo AD CS (Active Directory Certificate Services).

O objetivo foi construir uma infraestrutura segura, padronizada e escalável que centraliza aplicações internas com acesso via domínios internos, garantindo isolamento entre serviços e conformidade com boas práticas de segurança.

## Infraestrutura Base

| Componente | Detalhe |
|---|---|
| **Sistema** | Linux Server |
| **Virtualização** | Docker + Docker Compose |
| **Proxy** | Nginx Reverse Proxy |
| **Hardware** | Ryzen 5 5600G, 16GB RAM |
| **Rede** | VLAN dedicada, acesso segmentado |

## Arquitetura Docker

Containers implantados em rede Docker isolada (`proxy_net`):

- **nginx_proxy** — Reverse proxy central com TLS termination
- **Portainer** — Gerenciamento visual de containers
- **Vaultwarden** — Gerenciador de senhas corporativo
- **Snipe-IT** — Gestão de ativos de TI (ITAM) + MariaDB
- **Sistema interno** — Aplicação corporativa isolada (Adianti)

## Certificados SSL Corporativos

Certificado **wildcard** `*.srv.credfaz.org.br` gerado via:

1. OpenSSL → CSR (Certificate Signing Request)
2. AD CS → Assinatura corporativa
3. Instalação em `/opt/nginx/ssl`
4. Utilização em todos os serviços via Nginx

## Segurança Implementada

- **TLS 1.2/1.3** exclusivo em todas as conexões
- **Headers de segurança** (HSTS, X-Content-Type, X-Frame-Options)
- **Containers hardened** com `no-new-privileges`, `cap_drop`, `read_only`
- **Bloqueio de diretórios sensíveis** no Nginx
- **DNS interno** configurado no Active Directory

## DNS e Acesso

Registros DNS criados no AD para acesso por domínio interno:

```
os.srv.credfaz.org.br      → Sistema Interno
senhas.srv.credfaz.org.br   → Vaultwarden
ativos.srv.credfaz.org.br   → Snipe-IT
```

## Arquitetura Final

```
Active Directory DNS
        │
        │ *.srv.credfaz.org.br
        ▼
   Nginx Reverse Proxy (TLS)
        │
        ├── Vaultwarden (senhas)
        ├── Snipe-IT (ativos)
        ├── Sistema OS (interno)
        └── Portainer (gestão)
```

## Problemas Resolvidos

- Conflitos de porta Docker resolvidos com rede bridge dedicada
- Certificados não confiáveis → configuração de cadeia de certificação via AD CS
- Erro 500 do Snipe-IT → variáveis MySQL corrigidas
- Cache de certificado no Chrome → flush de HSTS
- NXDOMAIN DNS → registros A criados corretamente no AD

## Resultado

Infraestrutura corporativa moderna baseada em containers com **SSL corporativo**, **reverse proxy central**, **serviços isolados** e **domínios padronizados**. Modelo arquitetural alinhado com práticas de empresas de médio e grande porte.
