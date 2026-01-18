/**
 * Silivri Tango Dersi - 301 Redirect
 * 
 * This page redirects to /silivri-ozel-tango-dersi for SEO consolidation.
 * Prevents keyword cannibalization between similar pages.
 * 
 * "silivri tango dersi" → redirects to "silivri özel tango dersi"
 * This way, the özel page ranks for BOTH search terms.
 */

import { redirect } from 'next/navigation';

export default function SilivriTangoDersiPage() {
  redirect('/silivri-ozel-tango-dersi');
}
