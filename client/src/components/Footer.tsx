import { BUSINESS_INFO } from '../config/business';

const companyProfileUrl = new URL("../assets/Shining Star Bldg Company Profile.pdf", import.meta.url).href;
const productCatalogueUrl = new URL("../assets/Shining Star Product Catalogue.pdf", import.meta.url).href;

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] text-[var(--text)] border-t border-[var(--border)] py-5">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <span>© 2026 {BUSINESS_INFO.name}</span>
        <div className="flex items-center gap-3">
          <a href={companyProfileUrl} download className="px-4 py-2 rounded-md border border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-xs sm:text-sm">
            Download Company Profile
          </a>
          <a href={productCatalogueUrl} download className="px-4 py-2 rounded-md border border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-xs sm:text-sm">
            Download Product Catalogue
          </a>
        </div>
      </div>
    </footer>
  );
}
