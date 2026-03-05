# You can use most Debian-based base images
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY compile_page.sh /compile_page.sh
RUN sed -i 's/\r//' /compile_page.sh && chmod +x /compile_page.sh

# Install dependencies and customize sandbox
WORKDIR /home/user/nextjs-app

RUN npx --yes create-next-app@15.3.3 . --yes

RUN npx --yes shadcn@2.6.3 init --yes -b neutral --force
RUN npx --yes shadcn@2.6.3 add --all --yes

# Explicitly install all shadcn peer deps + tw-animate-css
RUN npm install tw-animate-css clsx tailwind-merge class-variance-authority

# Copy everything to home directory
RUN cp -r /home/user/nextjs-app/. /home/user/ && rm -rf /home/user/nextjs-app

# Guarantee lib/utils.ts exists at the final destination
RUN mkdir -p /home/user/lib && printf 'import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n' > /home/user/lib/utils.ts
