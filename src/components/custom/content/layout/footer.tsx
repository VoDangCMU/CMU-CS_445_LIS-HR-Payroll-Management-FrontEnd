import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

interface PayrollFooterProps {
    companyName: string
    companyAddress?: string
    companyPhone?: string
    companyEmail?: string
    logoSrc?: string
}

export function Footer({
                                  companyName,
                                  companyAddress = "123 Payroll Street, Finance City",
                                  companyPhone = "+1 (555) 123-4567",
                                  companyEmail = "contact@acmepayroll.com",
                                  logoSrc,
                              }: PayrollFooterProps) {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            {logoSrc ? (
                                <img src={logoSrc || "/placeholder.svg"} alt={`${companyName} logo`} className="h-8 w-auto" />
                            ) : (
                                <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold">
                                    {companyName.charAt(0)}
                                </div>
                            )}
                            <h3 className="text-lg font-bold">{companyName}</h3>
                        </div>
                        <p className="text-sm text-gray-600 max-w-xs">
                            Providing reliable payroll solutions for businesses of all sizes. Simplify your payroll process with our
                            advanced system.
                        </p>
                        <div className="space-y-2">
                            {companyAddress && (
                                <div className="flex items-start gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                    <span>{companyAddress}</span>
                                </div>
                            )}
                            {companyPhone && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone className="h-4 w-4 flex-shrink-0" />
                                    <span>{companyPhone}</span>
                                </div>
                            )}
                            {companyEmail && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail className="h-4 w-4 flex-shrink-0" />
                                    <span>{companyEmail}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/dashboard" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/employees" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Employees
                                </Link>
                            </li>
                            <li>
                                <Link href="/payroll" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Payroll Processing
                                </Link>
                            </li>
                            <li>
                                <Link href="/reports" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Reports
                                </Link>
                            </li>
                            <li>
                                <Link href="/settings" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Help & Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/guides" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Guides
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
                    <p>
                        © {currentYear} {companyName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

