import React from "react";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
export const navlinks = [
  {
    id: 1,
    label: "Company",
    path: "/company",
  },
  {
    id: 2,
    label: "Features",
    path: "/features",
    submenuClass: "megamenu",
    submenuIconClosed: <BiCaretDown />,
    submenuIconOpened: <BiCaretUp />,
    subMenu: [
      {
        label: "Multi-Currency Options",
        path: "/features/multi-currency-options",
      },
      {
        label: "Multi-lingual Check-outs",
        path: "/features/multi-lingual-check-outs",
      },
      {
        label: "Capacity to Customize",
        path: "/features/capacity-to-customize",
      },
      {
        label: "Inline Frame Integration",
        path: "/features/inline-frame-integration",
      },
      {
        label: "Retry Options Boost Sales",
        path: "/features/retry-options-boost-sales",
      },
      {
        label: "Intelligent Routing System",
        path: "/features/intelligent-routing-system",
      },
      {
        label: "Get Paid with SNAP",
        path: "/features/get-paid-with-snap",
      },
      {
        label: "Invoice Management System",
        path: "/features/invoice-management-system",
      },
      {
        label: "In-depth analytics",
        path: "/features/in-depth-analytics",
      },
      {
        label: "IOP Vault System",
        path: "/features/iop-vault-system",
      },
      {
        label: "International",
        path: "/features/international",
      },
      {
        label: "Responsive checkouts",
        path: "/features/responsive-checkouts",
      },
      {
        label: "Instant Activation",
        path: "/features/instant-activation",
      },
      {
        label: "Instant Payouts",
        path: "/features/instant-payout",
      },
      {
        label: "Collect & Intent",
        path: "/features/collect-and-intent",
      },
      {
        label: "Accept All Cards",
        path: "/features/accept-all-cards",
      },
      {
        label: "24/7 Support",
        path: "/features/24-7-support",
      },
      {
        label: "Pricing",
        path: "/features/pricing",
      },
      {
        label: "Platforms",
        path: "/features/platforms",
      },
      {
        label: "Payment Modes",
        path: "/features/payment-modes",
      },
      {
        label: "Resolve Queries Anytime",
        path: "/features/resolve-queries-anytime",
      },
      {
        label: "FRAME the Fraud",
        path: "/features/frame-the-fraud",
      },
      {
        label: "Maximum Payment Options",
        path: "/features/maximum-payment-options",
      },
      {
        label: "Cash-back for IOP Users",
        path: "/features/cash-back-for-iop-users",
      },
      {
        label: "Multi-Currency Wallet Transfer",
        path: "/features/multi-currency-wallet-transfer",
      },
    ],
  },
  {
    id: 3,
    label: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    label: "Support",
    path: "/support",
  },
  {
    id: 5,
    label: "Developer",
    path: "/developer",
    submenuClass: "simplemenu",
    // subMenu: [
    //   {
    //     label: "Blog",
    //     path: "/blog",
    //   },
    // ],
  },
];
