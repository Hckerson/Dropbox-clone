import { ChevronDownIcon} from "@heroicons/react/24/outline"
import { PDD, SDD, GDD } from "./test"
import { PDDs, SDDs, GDDs } from "./test 2.0"

export const productLInkL = [
  {label : 'Dropbox', href :  '/nav/products/dropbox' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Dropbox-logo-nav.svg?id=d587e174-e284-42e8-a18c-85c0d8e57e9e', body : 'Store, share and access files across devices'},
  {label : 'Replay', href :  '/nav/products/replay' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/replay-logo-nav.svg?id=411f20bf-600b-42f8-a5a5-508c48fc55f7', body : 'Review and approve videos faster'},
  {label : 'Backup', href :  '/nav/products/backup' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Backup-logo-nav.svg?id=88a257c5-602b-48c0-bf49-e65aa2df21dd', body : 'Automatically back up your devices'},
  {label : 'Capture', href :  '/nav/products/capture' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/Capture-logo-nav.svg?id=c6fb8e66-f6a0-4286-a8e2-5039067bd74b', body : 'Create screen recordings and video messages'}
]

export const productLInkR = [
  {label : 'Dash', href :  '/nav/products/dash' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dash-logo-nav.svg?id=0eaff5fa-ffc5-41dd-bba1-4f05c5e32205', body : 'Find, organize and protect company content'},
  {label : 'Sign', href :  '/nav/products/sign' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/DocSend-logo-nav.svg?id=27f665ce-74c5-4746-8b8c-61cd9e34aadd', body : 'Send documant securely and track activity'},
  {label : 'DocSend', href :  '/nav/products/docsend' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/dropbox-sign-logo.svg?id=f9aee885-ea7b-4b1f-81fd-3e908dadc578', body : 'Request and add signatures to document'},
  {label : 'Early access', href :  '/nav/products/early_access' ,src : 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/arrow_right.svg?id=e5339d6c-dcc7-477d-984b-7b2a039ca239', body : 'Preview new document experiences'}
]


export const team =[
  {label : 'Sales', href :  '/business/solution/sales' },
  {label : 'Marketing', href :  '/business/solution/marketing' },
  {label : 'HR', href :  '/business/solution/hr' },
  {label : 'IT', href :  '/business/solution/it' },
  {label : 'Creatives', href :  '/business/solution/creatives' }
]

export const industries = [
  {label : 'Construction', href :  '/nav/industries/construction' },
  {label : 'Technology', href :  '/nav/industries/technology' },
  {label : 'Manufacturing', href :  '/nav/industries/manufacturing' },
  {label : 'Media', href :  '/nav/industries/media' },
  {label : 'Professional services ', href :  '/nav/industries/professional_services' },
  {label : 'Education', href :  '/nav/industries/education' }
]

export const useCase = [
  {label : 'Cloud storage', href :  '/features/cloud_storage' },
  {label : 'Video review', href :  '/nav/products/replay' },
  {label : 'Signing document', href :  '/features/productivity/electronic_signature' },
  {label : 'Sharing files', href :  '/features/share' }
]

export const app = [
  {label : 'Desktop app', href :  '/nav/desktop' },
  {label : 'Mobile app', href :  '/nav/mobile' },
]

export const sub = [
  {label : 'Replay', href :  '/nav/products/replay' },
  {label : 'Features', href :  '/nav/products/replay#features' },
  {label : 'Integrations', href :  '/nav/products/replay#integrations' },
  {label : 'Pricing', href :  '/nav/products/replay#pricing' },
  {label : 'Why Replay?', href :  '/nav/products/replay#dropbox' },
]

export const lLink = [
  { name: "Products", href: "", icon: ChevronDownIcon, dropdown: PDD },
  { name: "Solutions", href: "", icon: ChevronDownIcon, dropdown : SDD },
  { name: "Enterprise", href: "/nav/enterprise" },
  { name: "Pricing", href: "/plans" },
];

export const rLink = [
  { name: "Contact sales", href: "/nav/contact" },
  { name: "Get app", href: "", icon: ChevronDownIcon, dropdown : GDD },
  { name: "Sign up", href: "/nav/register" },
  { name: "Log in", href: "/nav/login" },
];

export const L = [
  { name: "Products", href: "", icon: ChevronDownIcon, dropdown: PDDs },
  { name: "Solutions", href: "", icon: ChevronDownIcon, dropdown : SDDs },
  { name: "Enterprise", href: "/nav/enterprise" },
  { name: "Pricing", href: "/plans" },
];

export const R = [
  { name: "Contact sales", href: "/nav/contact" },
  { name: "Get app", href: "", icon: ChevronDownIcon, dropdown : GDDs },
  { name: "Sign up", href: "/nav/register" },
  { name: "Log in", href: "/nav/login" },
];

export const dropbox = [
  {label : 'Desktop app', href :  '/nav/desktop' },
  {label : 'Mobile app', href :  '/nav/mobile' },
  {label : 'Integration', href :  '/features/integrations' },
  {label : 'Features', href :  '/features' },
  {label : 'Solutions', href :  '/business/solutions' },
  {label : 'Security', href :  '/features/security' },
  {label : 'Early access', href :  '/aspect/early_access' },
  {label : 'Templates', href :  '/aspect/templates' },
  {label : 'Free tools', href :  '/aspect/free_tools' },
]

export const products = [
  {label : 'Plus', href :  '/plans/plus' },
  {label : 'Professional', href :  '/plans/professional' },
  {label : 'Business', href :  '/plans/business' },
  {label : 'Enterprise', href :  '/plans/enterprise' },
  {label : 'Dash (beta)', href :  '/https://dash.dropbox.com' },
  {label : 'Dropbox Sign', href :  '/https://sign.dropbox.com' },
  {label : 'DocSend', href :  '/https://www.docsend.com' },
  {label : 'Plans', href :  '/plans' },
  {label : 'Product Updates', href :  '/aspect/product/updates' },

]

export const features = [
  {label : 'Send large files', href :  '/features/share/send_large_files' },
  {label : 'Send long videos', href :  '/features/share/send_long_videos' },
  {label : 'Cloud photo storage', href :  '/features/cloud_storage/photos' },
  {label : 'Secure file transfer', href :  '/features/share/file_transfer' },
  {label : 'Password manager', href :  '/features/security/passwords' },
  {label : 'Cloud backup', href :  '/features/cloud_storage/file_backup' },
  {label : 'Edit PDFs', href :  '/features/productivity/pdf_editor' },
  {label : 'Electronic signatures', href :  '/features/productivity/elctronic_signature' },
  {label : 'Screen recorder', href :  '/features/content_collaboration/screen_recorder' },
  {label : 'Convert to PDF', href :  '/features/productivity/convert_to_pdf' },
]

export const supports = [
  {label : 'Help center ', href :  '/https://help.dropbox.com' },
  {label : 'Contact us', href :  '/aspect/contact' },
  {label : 'Privacy & terms', href :  '/aspect/terms' },
  {label : 'Cookie policy', href :  '//https://help.dropbox.com/account_billing/security/cookies' },
  {label : 'Cookies & CCPA preferences', href :  '/aspect/manage_cookies' },
  {label : 'AI principles', href :  '/features/ai_principles' },
  {label : 'Sitemap', href :  '/https://experience.dropbox.com' },
  {label : 'Learning resources', href :  '/https://learn.dropbox.com' },
]

export const resources = [
  {label : 'Blog', href :  '/https://blog.dropbox.com' },
  {label : 'Customer stories', href :  '/aspect/customers' },
  {label : 'Resources library', href :  '/https://experience.dropbox.com' },
  {label : 'Developers', href :  '/aspect/developers' },
  {label : 'Community forums', href :  '/https://www.dropboxforum.com' },
  {label : 'Referrals', href :  '/aspect/refer' },
  {label : 'Resellers partners', href :  '/business/partners' },
  {label : 'Integration partners', href :  '/aspect/app_integrations' },
  {label : 'Find a partner', href :  '/https://experience.dropbox.com/partner_locator' },
]

export const company = [
  {label : 'About us ', href :  '/aspect/about' },
  {label : 'Jobs', href :  '/https://jobs.dropbox.com' },
  {label : 'Investor relations', href :  '/https://investors.dropbox.com' },
  {label : 'ESG', href :  '/aspect/esg' },
]

export const articles = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Distraction-Article.png?id=13349693-d080-4ae6-8498-7b58b46dfeb9&output_type=png",
    href: "https://blog.dropbox.com/topics/work-culture/economist-impact-cost-of-lost-focus-research-study-2023",
    about:
      "Study: here is how many hours we lose to distraction—and how to get our focus back",
    note: "For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.",
    name : 'Blue face'
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-McLaren-Article.png?id=eb21f94b-ce63-462f-928a-e30761ba9321&output_type=png",
    href: "https://www.dropbox.com/mclaren-f1",
    about:
      "Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team",
    note: "Dropbox brings simplified sharing, collaboration, and organization to the McLaren Formula 1 Team.",
    name : 'mclaren vehicle'
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Photo-Sharing-Article.png?id=3d76b7bb-6145-4f8d-87cf-d156eff5de2d&output_type=png",
    href: "https://experience.dropbox.com/get-organized/best-way-to-share-photos",
    about: "The best way to share photos with family and friends",
    note: "Don’t lose precious photos. Save them and share them with loved ones—for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
    name : 'a happy family'
  },
];

export const aspects = [
  {
    href: "/business/solutions/constructions",
    id: 1,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/construction/construction-hero@2x.jpg?id=dbfc08de-234c-40af-949d-7e176ad7d582&width=1920&output_type=jpg",
    name: "Construction",
    about:
      "With Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
  {
    href: "/business/solutions/media",
    id: 2,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/creative-tools/The-Luupe-Genya-Oneall.jpg?id=bc0d3114-b68a-41e7-837b-262d86f2d472&width=1280&output_type=jpg ",
    name: "Media",
    about:
      "Create a flexible media workspace that connects your teams, content, and tools together.",
  },
  {
    href: "/business/solutions/technology",
    id: 3,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/technology/GettyImages-1139238082.jpg?id=7e97fb44-2356-46b7-8f3d-621a5f98072e&width=3840&output_type=jpg",
    name: "Technology",
    about:
      "Product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.",
  },
  {
    href: "/business/solutions/professional_services",
    id: 4,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/manufacturing/GettyImages-900253108.jpg?id=560cbf20-b4fc-4ec9-8769-8a5e9ad1b223&width=3840&output_type=jpg",
    name: "Professional services",
    about:
      "Make clients happier with easy collaboration, boosted productivity, and one organized place to get things done.",
  },

  {
    href: "/business/solutions/manufacturing",
    id: 5,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/professional-services/etgcNMmB.jpeg?id=e7016484-98bf-4757-acad-25618e33788e&width=3840&output_type=jpg",
    name: "Manufacturing",
    about:
      "Design and engineering teams easily collaborate, managing complex reviews and sharing large files seamlessly.",
  },
  {
    href: "/education",
    id: 6,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/education/education-hero@2x.jpg?id=40129999-5c0d-45fc-800e-134eecfd175e&width=1920&output_type=jpg ",
    name: "Education",
    about:
      "Power student learning, faculty research, and staff operations on Dropbox Education’s secure cloud collaboration platform.",
  },
];

export const every = [
  {id : 1, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/MultiblockCard1_840x816.jpg?id=cd74929b-c11a-45d0-aae4-1eac15984c30&output_type=jpg',head : 'Simple organization', body : 'Keep all your files in one place, and organize it just the way you want'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/MultiblockCard2_840x829.jpg?id=abd2c8cb-aab4-4287-8723-bef17297a6c0&output_type=jpg',head : 'Anytime access', body : 'Get to your files whenever and wherever you need them—on desktop, mobile or web '},
  {id : 3, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/storage-watermark-ui-transparent-2560x2560.png?id=0a37ebad-1922-414f-9a5c-07bd331c55c3&width=2560&output_type=png',head : 'Seamless security', body : 'Be sure your content is protected accross all devices with industry-leading encrytion, automatic backup, and two factor authentication'},
];

export const everyV1 = [
  {id : 1, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/02a_capture_tray_1440.png?id=764f26f5-f879-4186-987b-afe5a3b6058c&output_type=png',head : 'Be heard and stay engaged', body : 'Take screen recordings, screenshots, and GIFs with one click and share them easily with a link.'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/01b_capture_permissions_1920x1280.png?id=d6fbee0a-6d58-4ab4-95a6-7eebc8cd886e&width=1920&output_type=png',head : 'Quickly share updates with your team', body : 'Personalize and share your message with the right people at the right time using sharing links. '},
  {id : 3, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/capture_sharedcollections_840xauto.png?id=3eb5fe46-2bfa-4df0-b389-2aec4c77aa72&output_type=png',head : 'Integrate seamlessly into the way you work', body : 'Use your existing keyboard shortcuts and work faster with content automatically stored in Dropbox.'},
];

export const easy = [
  {id : 1, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/01_Backup_Simple-Computer-Backup_840x840.png?id=82281998-f695-4e27-80bc-54964274afab&output_type=png',head : 'Backup made simple', body : 'In just a few clicks, you can choose the files and folders you want Backup to keep safe, and we’ll take it from there.'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/03_Backup-External-Drive_840x840.png?id=5098b754-be53-4b5f-8f1c-72e2e3e7789a&output_type=png',head : 'An automated safety net', body : 'Automatic, always-on cloud backup saves you from accidental deletions, drive failures, and ransomware attacks.'},
  {id : 3, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/02_Backup_Restoration_840x840.png?id=52ff9a9b-9e32-468b-8ee5-7ea6d9442fab&output_type=png',head : 'Fast file recovery', body : 'Restore files quickly, and they’ll show up right back where you had them—no need to reorganize.'},
]

export const hows = [
  {id : 1, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/professionals-ui-1272x424.jpg?id=307eff00-8218-492a-8df5-659ca1fd4888&output_type=jpg',head : 'For work', body : 'Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all',link : '/overview?frompath=dropbox', name:'Try Dropbox'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/teams-ui-1272x424.jpg?id=5576ba5e-cca2-4b39-8abd-c2119e398717&output_type=jpg',head : 'For personal use', body : `Keep everything  that's important to you sharable and safe in one place. Store files in the cloud, share photos and videos, and more`, link : '/nav/plans', name: 'Compare plans'},
]

export const why = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/win-coconut.svg?id=395b8945-5c84-4b77-9916-4852b8bcddb3",
    why: "Highly recommended",
    fact: "9 out of 10 users would recommend Replay*",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/activity-coconut.svg?id=0c4e8e85-6251-4714-86bc-d4479bbf7a6e",
    why: "Production powerhouse",
    fact: "Some users who reported a faster workflow said Replay reduced project time by as much as much as 50%*",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/icons/conversation-coconut.svg?id=8d7b5705-61a0-4b71-bb8c-fda4948a836a",
    why: "Faster feedback",
    fact: "72% of users who reported a faster workflow said Replay helped get a quicker response from their team*",
  },
];


export const cards = [
  {
    id: 1,
    about: "“The security of knowing our information is safe.” ",
    note: "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share file successfully",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/BrianThumb.png?id=ad81b907-369a-439e-b7f7-1c52d1061618&output_type=png",
  },
  {
    id: 2,
    about: "“Seriously impressive security features.” ",
    note: "Tech influencer Justin Tse discuss why he trusts Dropbox to keep his content safe",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/JustinThumb.png?id=9e7c8793-8282-4398-a9d0-b1f1a803f10a&output_type=png",
  },
  {
    id: 3,
    about: "“How to enhance security and keep productivity reasonable” ",
    note: "Your company is sharing contents with collaborators all over the world. Are you in control?",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/SecurityThumb.png?id=9b20ffce-4e40-4d57-9ac1-6173cb71473e&output_type=png",
  },
];

export const customers = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_1.jpg?id=5c6a4d49-6d0f-4e50-a3a9-1899643dfc2e&width=2560&output_type=jpg",
    body: "“Dropbox has been tremendously helpful for social media, I can hop on anytime and pull whatever photo is inspiring me to post”",
    link: "/https://experience.dropbox.com/resources/bound-for-nowhere-customer-story",
    name: "Mary Ashley Krough (MAK)",
    role: "Illustrator and Graphic Designer",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_2.jpg?id=b1b754b5-244b-4a31-8a4f-76ec7666be19&width=2560&output_type=jpg",
    body: `“Dropbox increased our team's  collaboration while working from home, which has increase our flexibility and could revolutionize our office culture”`,
    link: "/https://experience.dropbox.com/resources/sundane-success-story",
    name: "Adam Montgomery",
    role: "Senior manager of Programming, Sundane Film Festival",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_3.jpg?id=d58ab911-5d3a-4edc-a129-68a5c164ca02&width=2560&output_type=jpg",
    body: `“We are a grass-roots non-profit. When we use a tool that the rest of the design world uses, it helps professionalize our organization”`,
    link: "/https://experience.dropbox.com/resources/creativity-explored-customer-story",
    name: "Ann Kappes",
    role: "Director of Art Partnerships at Creativity Explored",
  },
  {
    id: 4,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_4.png?id=18161da0-3bc4-40c9-a89a-6685f6e0161f",
    body: `“We are a grass-roots non-profit. When we use a tool that the rest of the design world uses, it helps professionalize our organization”`,
    link: "",
    name: "Lynette Elliot",
    role: "",
  },
  {
    id: 5,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_5.jpg?id=e1c41b07-cb77-4a83-b521-5f5b99c52ed6&width=2560&output_type=jpg ",
    body: "“Our team is working remotely—everyone’s in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.”",
    link: "/https://experience.dropbox.com/drop-in-video-series/sophia-chang",
    name: "Sophia Chang",
    role: "Illustrator and Designer",
  },
  {
    id: 6,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_6.jpg?id=48020aa4-2849-48be-9d8d-ccb6bbd51bce&width=2560&output_type=jpg",
    body: "“Dropbox version control is very important. You may want to go back to an earlier version because there’s an idea in there that you really like.”",
    link: "/https://experience.dropbox.com/drop-in-video-series/king-children",
    name: "Sahir Zaveri",
    role: "CEO of King Children",
  },
  {
    id: 7,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_7.png?id=359adf0f-1fbf-4cb7-bc49-6373cda8b4be",
    body: "“We store important photos and documents for our family on Dropbox. Not only do I know they are in a safe location, but I’m also able to access anywhere ”",
    link: "",
    name: "Sarah Shelton",
    role: "",
  },
];

export const customer = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/collaboration-review.svg?id=632fd2a2-6303-47da-8473-49f515b64268",
    body: "“Per project, Dropbox Replay easily saves me a day of work over the course of a month. It saves a ton of time.”",
    name: "Nicholas Gartner",
    role: "Film Editor, A Thousand Cuts",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/rachel_jedwood.jpg?id=fac2e0bd-768a-4a56-b879-f44cdf408337&width=2560&output_type=jpg",
    body: `“We use Replay for our content that requires lots of feedback and iterations, like campaigns with our players and commercial marketing materials. With Replay, we can share our feedback in one place, keep all the conversations documented in the comment threads, and have everything we need for edits and final delivery.”`,
    name: "Rachel Jedwood",
    role: "Production Officer, National Rugby League",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/video-stream.svg?id=c9c99a4f-990e-424d-bf31-2283ad490b34",
    body: `“I'll really miss emails with bulleted lists of video edits – said no one ever! Consolidated, frame-accurate edit notes make revisions and approvals a breeze.”`,
    name: "Sam Sullivan",
    role: "Owner & Graphic Designer, Notion Design Goods",
  },
  {
    id: 4,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/daniel_jackson.jpg?id=81fe1ea7-e18d-43bf-8eee-7e26089a2e85&width=2560&output_type=jpg",
    body: `“Replay makes what I do easier and simpler. I can get feedback from everybody in one spot—and check off comments as resolved—without email threads going around and context getting lost.”`,
    name: "Daniel Jackson",
    role: "Founder & Owner, Embassy: Interactive",
  },
  {
    id: 5,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/desk-laptop.svg?id=644389ee-53b3-41a3-95a3-77017b107e18 ",
    body: "“Dropbox Replay works well with the rest of my workflow. Since my work-in-progress files are already in Dropbox, I can just click on the file and add it to Replay.”",
    name: "Scott Lalonde",
    role: "Filmmaker, scottlalonde.com",
  },
  {
    id: 6,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/06_adam_nielsen.jpg?id=ed7c42d9-95d0-42c1-b075-4a4ad7c35faa&width=2560&output_type=jpg",
    body: "“Now with Replay, we can keep feedback centralized and the number of files I need to process to a minimum. Replay's integration with Adobe Premiere Pro will also make it easy for our post-production team to implement changes. I'm a huge fan.”",
    name: "Adam Nielson",
    role: "Creative Director of Branded Experience, Kaleidoscope Pictures",
  },
  {
    id: 7,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/conference-call.svg?id=7dac496c-c689-44ba-9ee4-989d8e2a36ec",
    body: "“Dropbox Replay is a good selling tool for clients, and the tracking tools are super helpful. It looks super cool when clients get a Dropbox Replay link. It’s a professional way to send videos to my clients.”",
    name: "Alan Novey",
    role: "Owner, BIGCAT Media",
  },
  {
    id: 8,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/replay/07_william_herrington.jpg?id=99b3dd43-88a8-4252-9b98-cab4e5dccaa3&width=2560&output_type=jpg",
    body: "“I manage a distributed team that produces hundreds of videos a year. It’s very time consuming to keep track of changes. But with Replay, we can watch the videos with our clients, capturing comments and tracking revisions in real-time. It’s an amazing tool for my team.”",
    name: "Will Herrington",
    role: "Owner & Creative Director, PhotoHouse Films/Herrington Studios",
  },
];


export const customerV1 = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/ginaolson.png?id=78594a41-8a36-4ff9-bff2-b559f4baed14&width=1920&output_type=png",
    body: "“Dropbox Backup calms my anxiety a bit. I've been using my work computer for a year now, but since it is from 2012 I know there's a possibility that it will freeze, fail, or die soon. But everything is backed up. That's a huge relief.”",
    name: "Gina Olson, United States",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/peterferguson.png?id=9b134af0-8356-430d-a299-172b17e7c976&width=1920&output_type=png",
    body: `“To me, Dropbox Backup is a good alternative to Carbon Copy Cloner, because I know it’s a complete identical index in the cloud, and it is integrated right into Dropbox with the rest of my files. For me it’s super important to have those external drives thoroughly indexed, safely backed up, and available wherever I am.”`,
    name: "Peter Ferguson, Nashville, TN",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/work desk plant.svg?id=53aa7464-b6d5-47fb-a435-d07deb4cef66",
    body: `“With Dropbox Backup, I don’t have to think about the last time my computer backed itself up. It’s seamless. It gets set up, it has a task to do and it does its job. I don’t have to think about it doing its job.”`,
    name: "C. Gage, United States",
  },
  {
    id: 4,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/work outside.svg?id=4d50dee2-98d5-48a4-b866-e8849adb47fe",
    body: `“Replay makes what I do easier and simpler. I can get feedback from everybody in one spot—and check off comments as resolved—without email threads going around and context getting lost.”`,
    name: "Arvin Velarde, United States",
  },
  {
    id: 5,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/Ekaterina-Borschov-Badano.png?id=95c4c069-53e0-464d-a058-78502f1487af&width=1920&output_type=png ",
    body: "“Dropbox Backup has improved my productivity since I don't have to spend so much time backing up my work to portable hard drives or syncing files to Dropbox. It also made it very easy to transfer all my files when I bought a new computer!”",
    name: "Ekaterina Borschov-Badano, United States",
  },
  {
    id: 6,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/alexgeller.png?id=80a0a54e-ef04-46f8-b726-8905630385f9&width=1920&output_type=png",
    body: "“With Dropbox Backup, you have a complete backup of information so if you were to lose it, you have an easy way to get it back and access it all in one spot.”",
    name: "Alex Geller, United States",
  },
  {
    id: 7,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/backup/M-collins.png?id=0c2fddab-05ff-4ceb-9882-c2812c9712c8&width=1920&output_type=png",
    body: "“Dropbox Backup has been great—I really like it. I was using another platform called CrashPlan and I didn’t really love it that much. With Dropbox Backup, it’s nice because it fits in with my workflow. I’m so used to using Dropbox for everything else and I prefer to have everything in one place anyway.”",
    name: "M. Collins, United States",
  },
];


export const customersV1 = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/07_nick_smith.png?id=b9367a46-9518-4c68-86bb-0217c675f099&output_type=png",
    body: "“When I get questions on, how do I do this?, it’s very easy to quickly record a video to capture that process and send it, rather than jumping on a video call or sending an email or writing a document. By viewing a one-minute video that resolves a problem, our employees can also take back time that would’ve been used to troubleshoot. Capture is a time saver.”",
    name: "—Nick Smith",
    role: "IT & Digital Operations Director, 1000heads",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/04_steve_lewis.png?id=5760b714-4ebb-4a25-beb2-af9374273664&output_type=png",
    body: `“Capture has made communication more efficient and more on-point. If a picture is worth a thousand words, a video must be worth ten thousand. If I send someone an email about an issue we’re having with a website, for example, if I can include a video, I can much more quickly make my point and therefore operate at a higher level of efficiency.”`,
    name: "—Steve Lewis",
    role: "IT Manager, Lehigh University",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/02_jonathan_pleska.png?id=db6a09df-79a2-4f80-a0c2-4c9ba8b591eb&output_type=png",
    body: `https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/02_jonathan_pleska.png?id=db6a09df-79a2-4f80-a0c2-4c9ba8b591eb&output_type=png`,
    name: "—Jonathan Pleska",
    role: "CEO, Geared Agency",
  },
  {
    id: 4,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/01_aaron_weinstein.png?id=fd55af96-366d-44d3-ab69-6818d02d2f7b&output_type=png",
    body: `“I can immediately deliver easy training to my team on a regular basis using Dropbox Capture. It’s a simple way to share ideas quickly and even cyclically.”`,
    name: "—Aaron Weinstein",
    role: "Digital Advertising Director, Chumney & Associates",
  },
  {
    id: 5,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/03_mackenzie_davis.png?id=b1d1868b-9c2d-4974-a83c-ac0b2fef6968&output_type=png",
    body: "“I often struggle with time zones at my company because we operate internationally. It’s hard to share ideas, because there’s only so much you can get across over-written messages. With Dropbox Capture, you can actually show the person what you're looking at, point things out, and convey it with your own voice.”",
    name: "—Mackenzie Davis",
    role: "Sr. Financial Operations Analyst, Consulting Industry",
  },
  {
    id: 6,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/capture/05_christopher_scordo.png?id=ba8ee39d-9865-4fce-b1cc-d28ed6a8fcc1&output_type=png",
    body: "“There’s always a risk when you introduce new tools that you're going to derail existing processes or make things harder for your team, but Capture is a tool that’s so intuitive that you don’t need to do a deep dive on instructions. You can start using it immediately.”",
    name: "—Christopher Scordo",
    role: "Founder & Managing Director, PMTraining",
  },
];