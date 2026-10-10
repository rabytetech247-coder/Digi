INSERT INTO users (id, email, password_hash, name, username) VALUES 
('usr_1', 'creator@labs.com', 'hash', 'Creator Labs', 'creatorlabs'),
('usr_2', 'growth@studio.com', 'hash', 'Growth Studio', 'growthstudio'),
('usr_3', 'pixel@foundry.com', 'hash', 'Pixel Foundry', 'pixelfoundry'),
('usr_4', 'freelance@engine.com', 'hash', 'Freelance Engine', 'freelanceengine'),
('usr_5', 'thumbnail@house.com', 'hash', 'Thumbnail House', 'thumbnailhouse'),
('usr_6', 'indie@builder.com', 'hash', 'Indie Builder', 'indiebuilder');

INSERT INTO categories (id, name, slug) VALUES 
('cat_1', 'AI Tools', 'ai-tools'),
('cat_2', 'Templates', 'templates'),
('cat_3', 'Design', 'design'),
('cat_4', 'Business', 'business'),
('cat_5', 'Graphics', 'graphics'),
('cat_6', 'eBooks', 'ebooks');

INSERT INTO products (id, seller_id, category_id, title, slug, description, source_platform, source_url, source_price, source_currency, source_rating, source_review_count, status) VALUES
('1', 'usr_1', 'cat_1', 'AI Content Creator Vault', 'ai-content-creator-vault', 'Prompts, hooks, captions and content systems for creators.', 'Gumroad', 'https://gumroad.com', 19.0, 'USD', 4.9, 128, 'active'),
('2', 'usr_2', 'cat_2', 'Instagram Growth Toolkit', 'instagram-growth-toolkit', 'Templates, calendars and growth workflows for consistent publishing.', 'Payhip', 'https://payhip.com', 12.0, 'USD', 4.8, 94, 'active'),
('3', 'usr_3', 'cat_3', 'Modern SaaS UI Kit', 'modern-saas-ui-kit', 'Clean landing page sections and dashboard components for SaaS products.', 'Lemon Squeezy', 'https://lemonsqueezy.com', 29.0, 'USD', 5.0, 67, 'active'),
('4', 'usr_4', 'cat_4', 'Freelancer Lead Generation Kit', 'freelancer-lead-generation-kit', 'Lead research sheets, outreach scripts and follow-up workflows.', 'CosmoFit', 'https://cosmofit.com', 15.0, 'USD', 4.7, 51, 'active'),
('5', 'usr_5', 'cat_5', 'YouTube Thumbnail Pack', 'youtube-thumbnail-pack', 'High-converting thumbnail layouts for creators.', 'Gumroad', 'https://gumroad.com', 9.0, 'USD', 4.9, 203, 'active'),
('6', 'usr_6', 'cat_6', 'Creator Business Playbook', 'creator-business-playbook', 'A structured guide to products, funnels and recurring revenue.', 'Lemon Squeezy', 'https://lemonsqueezy.com', 24.0, 'USD', 4.8, 76, 'active');

INSERT INTO product_images (id, product_id, r2_key) VALUES
('img_1', '1', '/images/products/ai-content-vault.svg'),
('img_2', '2', '/images/products/instagram-growth.svg'),
('img_3', '3', '/images/products/saas-ui-kit.svg'),
('img_4', '4', '/images/products/lead-generation.svg'),
('img_5', '5', '/images/products/youtube-thumbnail.svg'),
('img_6', '6', '/images/products/creator-playbook.svg');
