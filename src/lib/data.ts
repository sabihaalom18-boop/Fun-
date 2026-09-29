export interface OrderItem {
  id: string;
  name: string;
  sku: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  platform: 'Shopify' | 'WooCommerce';
  status: 'In Transit' | 'Delivered' | 'Processing' | 'Cancelled' | 'Refunded';
  trackingNumber: string;
  carrier: string;
  shippingAddress: string;
  orderDate: string;
  expectedDelivery: string;
  totalAmount: number;
  items: OrderItem[];
  returnEligible: boolean;
  returnWindowDaysRemaining: number;
}

export interface Message {
  id: string;
  sender: 'customer' | 'ai' | 'agent' | 'system';
  senderName: string;
  text: string;
  timestamp: string;
  confidence?: number;
  sourcesUsed?: string[];
  suggestedAction?: {
    type: 'refund' | 'address_change' | 'escalation' | 'cancel_order';
    details: string;
    requiresApproval: boolean;
    approved?: boolean;
  };
}

export interface Conversation {
  id: string;
  customerName: string;
  customerEmail: string;
  avatar: string;
  channel: 'Store Chat' | 'Email' | 'WhatsApp';
  status: 'ai_active' | 'human_needed' | 'resolved' | 'escalated';
  sentiment: 'Positive' | 'Neutral' | 'Frustrated';
  order?: Order;
  summary: string;
  aiConfidence: number;
  lastUpdated: string;
  unread: boolean;
  tags: string[];
  messages: Message[];
}

export interface KnowledgeDoc {
  id: string;
  title: string;
  category: 'Policy' | 'Shipping' | 'Product' | 'FAQ' | 'Store Sync';
  type: 'Document' | 'URL' | 'Store Product' | 'FAQ Pair';
  lastUpdated: string;
  status: 'Synced' | 'Indexing' | 'Sync Needed';
  wordCount: number;
  tokenCount: number;
}

export interface TraceLog {
  id: string;
  timestamp: string;
  conversationId: string;
  customer: string;
  inputTokenCount: number;
  outputTokenCount: number;
  costUsd: number;
  latencyMs: number;
  status: 'success' | 'escalated' | 'guardrail_triggered' | 'error';
  toolCalls: string[];
  retrievedDocs: string[];
  model: string;
}

export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  conversations: string;
  description: string;
  features: string[];
  popular?: boolean;
}

// Global configurable state default for Pricing (Rule #13)
export const initialPricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'STARTER',
    monthlyPrice: 39,
    yearlyPrice: 31,
    conversations: '300 AI conversations / mo',
    description: 'Perfect for fast-growing stores getting started with AI automation.',
    features: [
      '300 AI resolution conversations',
      'Shopify & WooCommerce integration',
      'Real-time order lookup & tracking',
      'Standard Knowledge Base sync',
      'Automated email & chat resolution',
      'Standard support'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    monthlyPrice: 99,
    yearlyPrice: 79,
    conversations: '1,000 AI conversations / mo',
    description: 'For established brands seeking advanced AI actions and human handoff.',
    popular: true,
    features: [
      '1,000 AI resolution conversations',
      'Shopify & WooCommerce native sync',
      'Human handoff workspace & summary',
      'AI action approvals (Refunds, Returns)',
      'Multi-language support (50+ languages)',
      'Sentiment analysis & custom brand voice',
      'Priority support response'
    ]
  },
  {
    id: 'pro',
    name: 'PRO',
    monthlyPrice: 299,
    yearlyPrice: 239,
    conversations: '3,500 AI conversations / mo',
    description: 'Designed for high-volume stores needing custom workflows & monitoring.',
    features: [
      '3,500 AI resolution conversations',
      'Omnichannel (Chat, Email, WhatsApp, Slack)',
      'Advanced AI Observability & Traces',
      'Custom Return Policy Intelligence',
      'Dedicated SLA & custom action hooks',
      'Role-based access control (RBAC)',
      'Dedicated success manager'
    ]
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    monthlyPrice: 799,
    yearlyPrice: 639,
    conversations: '10,000+ AI conversations / mo',
    description: 'Tailored enterprise deployments with tenant isolation and custom SLAs.',
    features: [
      '10,000+ AI conversations included',
      'Dedicated tenant isolation & HIPAA/SOC2',
      'Custom LLM fine-tuning & policy rules',
      'VIP 24/7 dedicated engineering support',
      'Custom OAuth & Webhook integrations',
      'Guaranteed SLA response times'
    ]
  }
];

export const mockOrders: Record<string, Order> = {
  '10482': {
    id: 'ord_10482',
    orderNumber: '#10482',
    customerName: 'Elena Rostova',
    customerEmail: 'elena.r@example.com',
    platform: 'Shopify',
    status: 'In Transit',
    trackingNumber: '1Z999AA10123456784',
    carrier: 'UPS Next Day Air',
    shippingAddress: '742 Evergreen Terrace, Seattle, WA 98101',
    orderDate: '2025-02-18',
    expectedDelivery: 'Tomorrow by 2:00 PM',
    totalAmount: 184.50,
    returnEligible: true,
    returnWindowDaysRemaining: 24,
    items: [
      { id: 'itm_1', name: 'Merino Wool Minimalist Jacket - Black / M', sku: 'JKT-BLK-M', quantity: 1, price: 149.00 },
      { id: 'itm_2', name: 'Organic Cotton Crew Socks - White', sku: 'SCK-WHT-O', quantity: 2, price: 17.75 }
    ]
  },
  '9281': {
    id: 'ord_9281',
    orderNumber: '#9281',
    customerName: 'Marcus Chen',
    customerEmail: 'm.chen@example.com',
    platform: 'WooCommerce',
    status: 'Delivered',
    trackingNumber: 'FEDEX-982138127391',
    carrier: 'FedEx Express',
    shippingAddress: '10880 Wilshire Blvd, Los Angeles, CA 90024',
    orderDate: '2025-02-12',
    expectedDelivery: 'Delivered Feb 15',
    totalAmount: 240.00,
    returnEligible: true,
    returnWindowDaysRemaining: 18,
    items: [
      { id: 'itm_3', name: 'Waterproof Trail Runner Sneaker - Olive / 10.5', sku: 'SNK-OLV-105', quantity: 1, price: 240.00 }
    ]
  }
};

export const mockConversations: Conversation[] = [
  {
    id: 'conv_1',
    customerName: 'Elena Rostova',
    customerEmail: 'elena.r@example.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
    channel: 'Store Chat',
    status: 'ai_active',
    sentiment: 'Neutral',
    summary: 'Customer inquiring about shipment status for order #10482.',
    aiConfidence: 0.98,
    lastUpdated: '2 mins ago',
    unread: true,
    tags: ['Order Tracking', 'In Transit', 'Shopify'],
    order: mockOrders['10482'],
    messages: [
      {
        id: 'm1',
        sender: 'customer',
        senderName: 'Elena Rostova',
        text: 'Hi there, where is my order #10482? It was supposed to ship two days ago.',
        timestamp: '10:24 AM'
      },
      {
        id: 'm2',
        sender: 'ai',
        senderName: 'SupportOS AI',
        text: 'Hello Elena! I checked your order #10482. It was shipped via UPS Next Day Air (Tracking: 1Z999AA10123456784). It is currently in transit and scheduled for delivery tomorrow by 2:00 PM.',
        timestamp: '10:24 AM',
        confidence: 0.98,
        sourcesUsed: ['Shopify Order API', 'UPS Tracking Webhook']
      }
    ]
  },
  {
    id: 'conv_2',
    customerName: 'Marcus Chen',
    customerEmail: 'm.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
    channel: 'Email',
    status: 'human_needed',
    sentiment: 'Frustrated',
    summary: 'Customer requesting a size exchange and partial refund approval for item in order #9281.',
    aiConfidence: 0.82,
    lastUpdated: '12 mins ago',
    unread: false,
    tags: ['Exchange', 'Human Handoff', 'Refund Request'],
    order: mockOrders['9281'],
    messages: [
      {
        id: 'm3',
        sender: 'customer',
        senderName: 'Marcus Chen',
        text: 'The sneakers I received (Order #9281) run too small. I want to return them for size 11 and get a refund on the expedited shipping charge.',
        timestamp: '09:45 AM'
      },
      {
        id: 'm4',
        sender: 'ai',
        senderName: 'SupportOS AI',
        text: 'I understand you need a size exchange for Order #9281 to size 11. Your item is within the 30-day return window. Regarding the shipping refund, I am handing this conversation to a human support manager for action approval.',
        timestamp: '09:46 AM',
        confidence: 0.82,
        sourcesUsed: ['WooCommerce Store Policy', 'Returns Rules engine'],
        suggestedAction: {
          type: 'refund',
          details: 'Approve partial refund of $15.00 for expedited shipping fee and generate return label for size 11 exchange.',
          requiresApproval: true
        }
      }
    ]
  },
  {
    id: 'conv_3',
    customerName: 'Sophia Martinez',
    customerEmail: 'sophia.m@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    channel: 'WhatsApp',
    status: 'resolved',
    sentiment: 'Positive',
    summary: 'Customer checked store return policy and warranty eligibility for leather footwear.',
    aiConfidence: 0.99,
    lastUpdated: '1 hour ago',
    unread: false,
    tags: ['Return Policy', 'Resolved'],
    messages: [
      {
        id: 'm5',
        sender: 'customer',
        senderName: 'Sophia Martinez',
        text: 'Can I return worn items if they have a manufacturing fault?',
        timestamp: '08:12 AM'
      },
      {
        id: 'm6',
        sender: 'ai',
        senderName: 'SupportOS AI',
        text: 'Yes! All items carry a 1-year manufacturer warranty against defects. You can initiate a free warranty claim directly through our self-service returns portal with your order number.',
        timestamp: '08:12 AM',
        confidence: 0.99,
        sourcesUsed: ['Warranty_Policy_2025.pdf']
      }
    ]
  }
];

export const mockTraceLogs: TraceLog[] = [
  {
    id: 'tr_88201',
    timestamp: '2025-02-20 10:24:12',
    conversationId: 'conv_1',
    customer: 'Elena Rostova',
    inputTokenCount: 1420,
    outputTokenCount: 185,
    costUsd: 0.0032,
    latencyMs: 1240,
    status: 'success',
    toolCalls: ['shopify_get_order(#10482)', 'ups_tracking_query'],
    retrievedDocs: ['Shipping_Terms_v2.md'],
    model: 'gpt-4o-supportos'
  },
  {
    id: 'tr_88202',
    timestamp: '2025-02-20 09:46:01',
    conversationId: 'conv_2',
    customer: 'Marcus Chen',
    inputTokenCount: 2890,
    outputTokenCount: 310,
    costUsd: 0.0068,
    latencyMs: 1820,
    status: 'guardrail_triggered',
    toolCalls: ['woocommerce_get_order(#9281)', 'refund_calculator'],
    retrievedDocs: ['Refund_Policy_Limits.pdf'],
    model: 'gpt-4o-supportos'
  },
  {
    id: 'tr_88203',
    timestamp: '2025-02-20 08:12:30',
    conversationId: 'conv_3',
    customer: 'Sophia Martinez',
    inputTokenCount: 890,
    outputTokenCount: 110,
    costUsd: 0.0018,
    latencyMs: 840,
    status: 'success',
    toolCalls: ['kb_vector_search'],
    retrievedDocs: ['Warranty_Policy_2025.pdf'],
    model: 'gpt-4o-supportos'
  }
];

export const mockKnowledgeDocs: KnowledgeDoc[] = [
  {
    id: 'doc_1',
    title: 'Store Return & Refund Master Policy 2025',
    category: 'Policy',
    type: 'Document',
    lastUpdated: '2 hours ago',
    status: 'Synced',
    wordCount: 3420,
    tokenCount: 4890
  },
  {
    id: 'doc_2',
    title: 'Shopify Product Catalog Sync (1,840 Items)',
    category: 'Store Sync',
    type: 'Store Product',
    lastUpdated: '10 mins ago',
    status: 'Synced',
    wordCount: 89400,
    tokenCount: 128400
  },
  {
    id: 'doc_3',
    title: 'International Shipping & Custom Duties Guide',
    category: 'Shipping',
    type: 'Document',
    lastUpdated: 'Yesterday',
    status: 'Synced',
    wordCount: 1850,
    tokenCount: 2410
  },
  {
    id: 'doc_4',
    title: 'Warranty & Replacement FAQ Collection',
    category: 'FAQ',
    type: 'FAQ Pair',
    lastUpdated: '3 days ago',
    status: 'Synced',
    wordCount: 1200,
    tokenCount: 1650
  }
];
