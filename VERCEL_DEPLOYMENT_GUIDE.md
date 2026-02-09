# Vercel Deployment Guide

## Build Error Fix: Environment Variables Not Available at Build Time

The Vercel build was failing because the `/test-supabase` page tried to render at build time without environment variables available.

**Error:**
```
Error: supabaseUrl is required.
Error occurred prerendering page "/test-supabase"
```

---

## Solution Implemented

### 1. Dynamic Page Rendering
The `/test-supabase` page now uses `export const dynamic = 'force-dynamic'` which prevents prerendering and only renders on-demand when the server has access to environment variables.

### 2. Safe Client Initialization
Updated `supabaseClient.ts` to gracefully handle missing environment variables during build time.

### 3. Optional Client Getter
Created `getSupabaseClient()` function that throws an error with a clear message if the client isn't properly initialized.

---

## Vercel Environment Variables Setup

To deploy successfully on Vercel, add these environment variables:

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. Add these variables:

| Variable Name | Value | Type |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://verhrcogztsucfjrzqpb.supabase.co` | Plaintext |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your anon key from Supabase | Plaintext |

3. Make sure to set them for:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

4. **Redeploy** after adding the variables

---

## What Changed

### Files Modified
- `app/test-supabase/page.tsx` - Added `export const dynamic = 'force-dynamic'`
- `lib/supabaseClient.ts` - Refactored to handle missing env vars
- `lib/useSupabase.ts` - Updated to use `getSupabaseClient()` function

### Key Features
✅ Build succeeds without environment variables  
✅ Pages render correctly at runtime with environment variables  
✅ Clear error messages if Supabase isn't configured  
✅ `/test-supabase` page still works as expected when deployed  

---

## Verification After Deployment

1. Navigate to `https://your-vercel-domain.com/test-supabase`
2. You should see: **"✅ Supabase is connected successfully! Ready to use."**

If you see an error:
- Verify environment variables are set in Vercel
- Check that variables are set for the correct environment (Production/Preview)
- Redeploy after adding/updating variables

---

## Common Issues & Fixes

### Issue: Build fails with "supabaseUrl is required"
**Solution:** Add `NEXT_PUBLIC_SUPABASE_URL` to Vercel environment variables and redeploy

### Issue: "Connection error" at `/test-supabase`
**Solution:** Verify the Supabase URL and anon key are correct in Vercel environment variables

### Issue: Build still fails after adding env vars
**Solution:** 
1. Clear Vercel's build cache (Settings → Deployments → Clear Cache → Redeploy)
2. Or manually redeploy the same commit

---

## Next Steps

1. ✅ Add environment variables to Vercel
2. ✅ Redeploy the project
3. ✅ Test the `/test-supabase` page
4. ✅ Verify email subscriptions work via the form

---

## Deployment Checklist

- [ ] Supabase project created with `email_subscriptions` table
- [ ] Supabase URL and Anon Key copied
- [ ] Environment variables added to Vercel
- [ ] Project redeployed on Vercel
- [ ] `/test-supabase` page accessible and showing "✅ Connected"
- [ ] Email subscription form working on homepage
- [ ] Submitted emails appearing in Supabase database

---

## Technical Details

**Why `/test-supabase` needs `dynamic = 'force-dynamic'`?**
- Next.js tries to prerender pages at build time to optimize performance
- But prerendering requires all dependencies to be available
- Supabase client init needs environment variables, which aren't available during build in Vercel
- `force-dynamic` tells Next.js to render this page on-demand instead

**Why export `getSupabaseClient()` instead of the client directly?**
- Allows lazy initialization and validation
- Prevents errors during build time
- Provides clear error messages if client isn't initialized
- Maintains type safety

---

## Support

If deployment issues persist:
1. Check Vercel build logs for specific error messages
2. Verify all environment variables are set
3. Check Supabase project status at https://supabase.com
4. Try clearing Vercel cache and redeploying
