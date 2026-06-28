/**
 * Copyright (c) 2026 ByteDance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 *
 * Centralized domain helpers for Feishu / Lark brand-aware URL generation.
 *
 * All runtime code that needs to construct platform URLs should use these
 * helpers instead of hardcoding domain strings.
 */

import type { LarkBrand } from './types';

// When brand is a full URL (https://...), treat it as a private deployment
// base URL — the same pattern used by lark-client.ts resolveBrand().
// Set channels.feishu.domain to your private URL in openclaw.json.

/** 开放平台域名 (API & 权限管理页面) */
export function openPlatformDomain(brand?: LarkBrand): string {
  if (brand === 'weact') return 'https://open.weact.pipechina.com.cn';
  if (brand?.startsWith('https://')) return brand.replace(/\/+$/, '');
  return brand === 'lark' ? 'https://open.larksuite.com' : 'https://open.feishu.cn';
}

/** Applink 域名 */
export function applinkDomain(brand?: LarkBrand): string {
  if (brand === 'weact') return 'https://applink.weact.pipechina.com.cn';
  if (brand?.startsWith('https://')) return brand.replace(/\/+$/, '').replace('//open.', '//applink.');
  return brand === 'lark' ? 'https://applink.larksuite.com' : 'https://applink.feishu.cn';
}

/** 主站域名 (文档、表格等用户可见链接) */
export function wwwDomain(brand?: LarkBrand): string {
  if (brand === 'weact') return 'https://open.weact.pipechina.com.cn';
  if (brand?.startsWith('https://')) return brand.replace(/\/+$/, '');
  return brand === 'lark' ? 'https://www.larksuite.com' : 'https://www.feishu.cn';
}

/** MCP 服务域名 */
export function mcpDomain(brand?: LarkBrand): string {
  return brand === 'lark' ? 'https://mcp.larksuite.com' : 'https://mcp.feishu.cn';
}
