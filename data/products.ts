export type Product={id:string;title:string;description:string;category:string;price:string;rating:string;reviews:number;image:string;seller:string;source:string;badge?:string};
export const categories=[
{name:"eBooks",count:"12K+",icon:"/images/categories/ebook.svg",description:"Practical books, guides and playbooks."},
{name:"Software",count:"8.5K+",icon:"/images/categories/software.svg",description:"Apps, plugins and developer tools."},
{name:"Templates",count:"15K+",icon:"/images/categories/templates.svg",description:"Ready-to-use templates for work and creators."},
{name:"Courses",count:"9.8K+",icon:"/images/categories/courses.svg",description:"Courses and learning resources."},
{name:"AI Tools",count:"7.2K+",icon:"/images/categories/ai.svg",description:"AI software, assistants and creator utilities."},
{name:"Prompt Packs",count:"4.3K+",icon:"/images/categories/prompt.svg",description:"Curated prompts for Midjourney, ChatGPT, etc."},
{name:"Design Resources",count:"11K+",icon:"/images/categories/design.svg",description:"UI kits, graphics and design systems."},
{name:"Marketing",count:"6.5K+",icon:"/images/categories/marketing.svg",description:"SEO, social media and marketing templates."},
{name:"Business",count:"8.9K+",icon:"/images/categories/business.svg",description:"Business, finance and growth resources."},
{name:"Education",count:"5.4K+",icon:"/images/categories/education.svg",description:"Educational materials and study guides."},
{name:"Productivity",count:"7.8K+",icon:"/images/categories/productivity.svg",description:"Tools and systems to get more done."},
{name:"Other",count:"3.2K+",icon:"/images/categories/other.svg",description:"Miscellaneous digital products and assets."}
];
export const products:Product[]=[
{id:"1",title:"AI Content Creator Vault",description:"Prompts, hooks, captions and content systems for creators.",category:"AI Tools",price:"$19",rating:"4.9",reviews:128,image:"/images/products/ai-content-vault.svg",seller:"Creator Labs",source:"Gumroad",badge:"Trending"},
{id:"2",title:"Instagram Growth Toolkit",description:"Templates, calendars and growth workflows for consistent publishing.",category:"Templates",price:"$12",rating:"4.8",reviews:94,image:"/images/products/instagram-growth.svg",seller:"Growth Studio",source:"Payhip",badge:"Popular"},
{id:"3",title:"Modern SaaS UI Kit",description:"Clean landing page sections and dashboard components for SaaS products.",category:"Design",price:"$29",rating:"5.0",reviews:67,image:"/images/products/saas-ui-kit.svg",seller:"Pixel Foundry",source:"Lemon Squeezy"},
{id:"4",title:"Freelancer Lead Generation Kit",description:"Lead research sheets, outreach scripts and follow-up workflows.",category:"Business",price:"$15",rating:"4.7",reviews:51,image:"/images/products/lead-generation.svg",seller:"Freelance Engine",source:"CosmoFit"},
{id:"5",title:"YouTube Thumbnail Pack",description:"High-converting thumbnail layouts for creators.",category:"Graphics",price:"$9",rating:"4.9",reviews:203,image:"/images/products/youtube-thumbnail.svg",seller:"Thumbnail House",source:"Gumroad"},
{id:"6",title:"Creator Business Playbook",description:"A structured guide to products, funnels and recurring revenue.",category:"eBooks",price:"$24",rating:"4.8",reviews:76,image:"/images/products/creator-playbook.svg",seller:"Indie Builder",source:"Lemon Squeezy"}];
