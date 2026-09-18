# E-learning NTU

Monorepo gồm API PHP thuần theo Clean Architecture và giao diện Next.js.

## Chạy local bằng Docker

1. Sao chép biến môi trường: `cp .env.example .env`
2. Chạy: `docker compose up --build`
3. Mở frontend tại http://localhost:3000 và kiểm tra API tại http://localhost:8080/health

Docker tự tạo database PostgreSQL và chạy migration ở lần khởi động API đầu tiên.

## Cấu trúc

```
e-learning-ntu-be/   API PHP 8.3, Clean Architecture
e-learning-ntu-fe/   Next.js App Router, TypeScript
```

## Các endpoint hiện có

- `GET /health`
- `GET /api/v1/courses`
- `POST /api/v1/courses` với `{ "title": "...", "description": "..." }`

## Phát triển không dùng Docker

Backend cần PHP 8.3 và extension `pdo_pgsql`; cấu hình trong `e-learning-ntu-be/.env.example`.
Frontend: `cd e-learning-ntu-fe && npm install && npm run dev`.

## CI/CD

- `CI` kiểm tra cú pháp PHP, type-check/build Next.js và Docker build ở mọi PR/push vào `main`.
- `CD` chạy khi merge vào `main`, xuất hai image API/Web lên GitHub Container Registry (GHCR), gắn tag `latest` và commit SHA.

Để triển khai lên server, cấu hình server dùng các image GHCR vừa xuất bản và thay image tags theo SHA. Bước này cần thông tin hạ tầng (SSH/Kubernetes/Cloud) nên chưa tự động hóa để không giả định nhà cung cấp hoặc ghi đè môi trường production.
