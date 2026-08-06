from pathlib import Path

replacements = {
    "src/app/online-pmes/page.tsx": [
        # remove color constant block
        (
            "const COLORS = {\n  green: '#006B3F',\n  darkGreen: '#004D2D',\n  gold: '#D4AF37',\n  lightGreen: '#EAF5EE',\n};\n\n",
            ""
        ),
        ("color: COLORS.green,\n", ""),
        ("color: COLORS.darkGreen,\n", ""),
        ("bg-[#F8F9FA]", "bg-brand-soft"),
        ("from-[#004D2D] via-[#006B3F] to-[#005533]", "from-brand-dark via-brand-medium to-brand-dark"),
        ("bg-[#D4AF37]/10", "bg-brand-gold/10"),
        ("bg-[#D4AF37]/20", "bg-brand-gold/20"),
        ("border-[#D4AF37]/40", "border-brand-gold/40"),
        ("text-[#D4AF37]", "text-brand-gold"),
        ("bg-[#D4AF37]", "bg-brand-gold"),
        ("shadow-[#D4AF37]/25", "shadow-brand-gold/25"),
        ("bg-[#006B3F]", "bg-brand-medium"),
        ("text-[#006B3F]", "text-brand-medium"),
        ("from-[#006B3F]", "from-brand-medium"),
        ("to-[#006B3F]", "to-brand-medium"),
        ("border-[#006B3F]", "border-brand-medium"),
        ("hover:text-[#006B3F]", "hover:text-brand-medium"),
        ("hover:bg-[#006B3F]", "hover:bg-brand-medium"),
        ("bg-[#EAF5EE]", "bg-brand-soft"),
        ("bg-[#E8F5EF]", "bg-brand-soft"),
        ("bg-[#F3F4F6]", "bg-brand-soft"),
        ("border-[#F3F4F6]", "border-brand-soft"),
        ("border-[#E5E7EB]", "border-brand-gray"),
        ("bg-[#E5E7EB]", "bg-brand-gray"),
        ("border-[#005f36]", "border-brand-dark"),
        ("hover:bg-[#005f36]", "hover:bg-brand-dark"),
        ("hover:bg-[#004D2D]", "hover:bg-brand-dark"),
        ("#F8F9FA", "rgb(248,249,250)"),
        ("#fff", "rgb(255,255,255)"),
        ("bg-[#004D2D]", "bg-brand-dark"),
        ("from-[#003d22]/95", "from-brand-dark/95"),
        ("via-[#004D2D]/85", "via-brand-dark/85"),
        ("bg-[#D4AF37]/15", "bg-brand-gold/15"),
        ("border-[#BFE7D5]", "border-brand-medium/20"),
        ("text-[#065f46]", "text-brand-medium"),
        ("text-[#004D2D]", "text-brand-dark"),
        ("hover:bg-[#00532f]", "hover:bg-brand-dark"),
        ("shadow-[#004D2D]/20", "shadow-brand-dark/20"),
    ],
    "src/app/contact/page.tsx": [
        ("bg-[#006B3F]/5", "bg-brand-medium/5"),
        ("bg-[#D4AF37]/5", "bg-brand-gold/5"),
        ("bg-[#006B3F]/10", "bg-brand-medium/10"),
        ("text-[#006B3F]", "text-brand-medium"),
        ("from-[#006B3F] via-[#004D2D] to-[#D4AF37]", "from-brand-medium via-brand-dark to-brand-gold"),
        ("from-[#006B3F] to-[#004D2D]", "from-brand-medium to-brand-dark"),
        ("bg-[#006B3F]", "bg-brand-medium"),
        ("border-[#006B3F]", "border-brand-medium"),
        ("hover:text-[#006B3F]", "hover:text-brand-medium"),
        ("text-[#004D2D]", "text-brand-dark"),
        ("border-[#E5E7EB]", "border-brand-gray"),
        ("bg-[#E5E7EB]", "bg-brand-gray"),
        ("bg-[#D4AF37]/10", "bg-brand-gold/10"),
        ("bg-[#D4AF37]", "bg-brand-gold"),
        ("border-[#D4AF37]/40", "border-brand-gold/40"),
        ("shadow-[#D4AF37]/30", "shadow-brand-gold/30"),
    ],
    "src/app/annual-reports/page.tsx": [
        ("bg-[#006B3F]/5", "bg-brand-medium/5"),
        ("bg-[#D4AF37]/15", "bg-brand-gold/15"),
        ("bg-[#E8F5EF]", "bg-brand-soft"),
        ("text-[#006B3F]", "text-brand-medium"),
        ("border-[#BFE7D5]", "border-brand-medium/20"),
        ("bg-[#006B3F]", "bg-brand-medium"),
        ("border-[#006B3F]", "border-brand-medium"),
        ("bg-[#006B3F]/10", "bg-brand-medium/10"),
        ("border-[#006B3F]/15", "border-brand-medium/15"),
        ("text-[#D4AF37]", "text-brand-gold"),
        ("bg-[#D4AF37]", "bg-brand-gold"),
        ("hover:bg-[#005f36]", "hover:bg-brand-dark"),
        ("focus:ring-[#D4AF37]", "focus:ring-brand-gold"),
        ("border-[#E5E7EB]", "border-brand-gray"),
        ("text-[#004D2D]", "text-brand-dark"),
    ],
    "src/app/about/page.tsx": [
        ("bg-[#f5f9f7]", "bg-brand-soft"),
        ("bg-[#004D2D]", "bg-brand-dark"),
        ("from-[#003d22]/92 via-[#004D2D]/72 to-[#006B3F]/20", "from-brand-dark/92 via-brand-dark/72 to-brand-medium/20"),
        ("bg-[#D4AF37]", "bg-brand-gold"),
        ("text-[#D4AF37]", "text-brand-gold"),
        ("bg-[#D4AF37]/10", "bg-brand-gold/10"),
        ("border-[#D4AF37]/30", "border-brand-gold/30"),
        ("bg-[#EBF7EE]", "bg-brand-soft"),
        ("text-[#065f46]", "text-brand-medium"),
        ("text-[#004D2D]", "text-brand-dark"),
        ("hover:bg-[#00532f]", "hover:bg-brand-dark"),
        ("bg-[#003d22]/95", "bg-brand-dark/95"),
        ("via-[#004D2D]/85", "via-brand-dark/85"),
        ("bg-[#D4AF37]/10", "bg-brand-gold/10"),
        ("text-[#D4AF37]", "text-brand-gold"),
        ("bg-[#F8F9FA]", "bg-brand-soft"),
        ("bg-[linear-gradient(135deg,_#004d2d_0%,_#006b3f_100%)]", "bg-[linear-gradient(135deg,_rgb(6,69,44)_0%,_rgb(11,93,59)_100%)]"),
        ("bg-[linear-gradient(135deg,_#003d22_0%,_#005f37_100%)]", "bg-[linear-gradient(135deg,_rgb(6,69,44)_0%,_rgb(11,93,59)_100%)]"),
    ],
}

for path_str, replacements_list in replacements.items():
    path = Path(path_str)
    if not path.exists():
        print(f"Missing file: {path}")
        continue
    text = path.read_text(encoding='utf-8')
    original = text
    for old, new in replacements_list:
        text = text.replace(old, new)
    if text != original:
        path.write_text(text, encoding='utf-8')
        print(f"Updated {path}")
    else:
        print(f"No changes for {path}")
