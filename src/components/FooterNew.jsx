import { motion } from 'framer-motion';

const FooterNew = () => {
    return (
        <motion.footer
            id="contact"
            className="py-10 px-8 md:px-16 bg-[#FFCC00] text-black border-t border-black/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                    <div>
                        <h2 className="text-huge font-bold text-black leading-none mb-8">
                            JOIN THE <br />
                            <span className="text-white text-stroke-black">REVOLUTION</span>
                        </h2>
                        <a href="mailto:robotic@itk.ac.id" className="text-2xl text-black/80 hover:text-white transition-colors">
                            robotic@itk.ac.id
                        </a>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-black font-bold mb-4 uppercase tracking-widest text-xs">Socials</h4>
                                <ul className="space-y-3 text-black/70">
                                    <li>
                                        <a href="https://instagram.com/robotik.itk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                                            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm1.072 2.155c-.01 0-.012 0-.012 0h-3.15c-1.897 0-2.43.033-2.906.219a2.91 2.91 0 01-1.053.684 2.91 2.91 0 01-.684 1.053c-.186.476-.22 1.009-.22 2.906v3.15c0 1.897.033 2.43.219 2.906a2.912 2.912 0 01.684 1.053 2.91 2.91 0 011.053.684c.476.186 1.009.22 2.906.22h3.15c1.897 0 2.43-.033 2.906-.219a2.91 2.91 0 011.053-.684 2.91 2.91 0 01.684-1.053c.186-.476.22-1.009.22-2.906v-3.15c0-1.897-.033-2.43-.219-2.906a2.91 2.91 0 01-.684-1.053 2.91 2.91 0 01-1.053-.684c-.476-.186-1.009-.22-2.906-.22zM12 7.172a4.828 4.828 0 110 9.656 4.828 4.828 0 010-9.656zm0 2.155a2.672 2.672 0 100 5.344 2.672 2.672 0 000-5.344zm5.586-4.572a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium text-sm">@robotik.itk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/robotik-itk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                                            <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium text-sm">Robotic ITK</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-black font-bold mb-4 uppercase tracking-widest text-xs">Menu</h4>
                                <ul className="space-y-2 text-black/70">
                                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#departments" className="hover:text-white transition-colors">Departments</a></li>
                                    <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-black/60 text-sm mt-12 md:mt-0">
                            &copy; 2026 Robotic ITK.
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer >
    );
};

export default FooterNew;
