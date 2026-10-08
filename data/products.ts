export type Product={id:string;title:string;description:string;category:string;price:string;rating:string;reviews:number;image:string;seller:string;source:string;badge?:string};
export const categories=[
{name:"AI Tools",count:"1,240+",icon:"/images/categories/ai.svg",description:"AI software, assistants and creator utilities."},
{name:"eBooks",count:"3,850+",icon:"/images/categories/ebook.svg",description:"Practical books, guides and playbooks."},
{name:"Templates",count:"2,430+",icon:"/images/categories/templates.svg",description:"Ready-to-use templates for work and creators."},
{name:"Courses",count:"980+",icon:"/images/categories/courses.svg",description:"Courses and learning resources."},
{name:"Design",count:"1,760+",icon:"/images/categories/design.svg",description:"UI kits, graphics and design systems."},
{name:"Business",count:"2,120+",icon:"/images/categories/business.svg",description:"Business, marketing and growth resources."}];
export const products:Product[]=[
{id:"1",title:"AI Content Creator Vault",description:"Prompts, hooks, captions and content systems for creators.",category:"AI Tools",price:"$19",rating:"4.9",reviews:128,image:"/images/products/ai-content-vault.svg",seller:"Creator Labs",source:"Gumroad",badge:"Trending"},
{id:"2",title:"Instagram Growth Toolkit",description:"Templates, calendars and growth workflows for consistent publishing.",category:"Templates",price:"$12",rating:"4.8",reviews:94,image:"/images/products/instagram-growth.svg",seller:"Growth Studio",source:"Payhip",badge:"Popular"},
{id:"3",title:"Modern SaaS UI Kit",description:"Clean landing page sections and dashboard components for SaaS products.",category:"Design",price:"$29",rating:"5.0",reviews:67,image:"/images/products/saas-ui-kit.svg",seller:"Pixel Foundry",source:"Lemon Squeezy"},
{id:"4",title:"Freelancer Lead Generation Kit",description:"Lead research sheets, outreach scripts and follow-up workflows.",category:"Business",price:"$15",rating:"4.7",reviews:51,image:"/images/products/lead-generation.svg",seller:"Freelance Engine",source:"CosmoFit"},
{id:"5",title:"YouTube Thumbnail Pack",description:"High-converting thumbnail layouts for creators.",category:"Graphics",price:"$9",rating:"4.9",reviews:203,image:"/images/products/youtube-thumbnail.svg",seller:"Thumbnail House",source:"Gumroad"},
{id:"6",title:"Creator Business Playbook",description:"A structured guide to products, funnels and recurring revenue.",category:"eBooks",price:"$24",rating:"4.8",reviews:76,image:"/images/products/creator-playbook.svg",seller:"Indie Builder",source:"Lemon Squeezy"}];
