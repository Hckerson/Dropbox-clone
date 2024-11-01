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
    pic: " https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/creative-tools/The-Luupe-Genya-Oneall.jpg?id=bc0d3114-b68a-41e7-837b-262d86f2d472&output_type=jpg",
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
    pic: " https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/education/education-hero@2x.jpg?id=40129999-5c0d-45fc-800e-134eecfd175e&width=1920&output_type=jpg",
    name: "Education",
    about:
      "Power student learning, faculty research, and staff operations on Dropbox Education’s secure cloud collaboration platform.",
  },
];

export const every = [
  {id : 1, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/MultiblockCard1_840x816.jpg?id=cd74929b-c11a-45d0-aae4-1eac15984c30&output_type=jpg',head : 'Simple organization', body : 'Keep all your files in one place, and organize it just the way you want'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/MultiblockCard2_840x829.jpg?id=abd2c8cb-aab4-4287-8723-bef17297a6c0&output_type=jpg',head : 'Anytime access', body : 'Get to your files whenever and wherever you need them—on desktop, mobile or web '},
  {id : 3, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/storage-watermark-ui-transparent-2560x2560.png?id=0a37ebad-1922-414f-9a5c-07bd331c55c3&width=2560&output_type=png',head : 'Seamless security', body : 'Be sure your content is protected accross all devices with industry-leading encrytion, automatic backup, and two factor authentication'},
]

export const hows = [
  {id : 1, src: ' https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/professionals-ui-1272x424.jpg?id=307eff00-8218-492a-8df5-659ca1fd4888&output_type=jpg ',head : 'For work', body : 'Work efficiently with teammates and clients, stay in sync on projects, and keep company data safe—all',link : '/overview?frompath=dropbox', name:'Try Dropbox'},
  {id : 2, src: 'https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/teams-ui-1272x424.jpg?id=5576ba5e-cca2-4b39-8abd-c2119e398717&output_type=jpg',head : 'For personal use', body : `Keep everything  that's important to you sharable and safe in one place. Store files in the cloud, share photos and videos, and more`, link : '/nav/plans', name: 'Compare plans'},
]




