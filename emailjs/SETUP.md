# EmailJS contact template setup

## 1. Create template

EmailJS → **Email Templates** → **Create New Template**

## 2. Template settings

| Field | Value |
|-------|--------|
| **Template name** | Nifa Farms Contact |
| **To Email** | `tinkler@nifafarms.com` |
| **From Name** | `Nifa Farms Website` |
| **Reply To** | `{{reply_to}}` |
| **Subject** | `[Nifa Farms] {{subject}} — {{name}}` |

## 3. Content

Copy everything inside `contact-form-template.html` **except** the HTML comment at the top, and paste into the template **Content** editor (switch to HTML/source mode if available).

## 4. Copy IDs into `.env`

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Add the same three variables in **Vercel** → Environment Variables, then redeploy.

## 5. Test

Use EmailJS **Test It** with sample values, then submit the live contact form.
