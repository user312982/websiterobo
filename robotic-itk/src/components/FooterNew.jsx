import { motion } from 'framer-motion';

const FooterNew = () => {
    return (
        <motion.footer
            id="contact"
            className="py-20 px-8 md:px-16 bg-[#000] border-t border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
                    <div>
                        <h2 className="text-huge font-bold text-white leading-none mb-8">
                            JOIN THE <br />
                            <span className="text-[#003311] text-stroke">REVOLUTION</span>
                        </h2>
                        <a href="mailto:robotic@itk.ac.id" className="text-2xl text-[#88998C] hover:text-[#FFCC00] transition-colors">
                            robotic@itk.ac.id
                        </a>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Socials</h4>
                                <ul className="space-y-2 text-[#88998C]">
                                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Menu</h4>
                                <ul className="space-y-2 text-[#88998C]">
                                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#departments" className="hover:text-white transition-colors">Departments</a></li>
                                    <li><a href="#activities" className="hover:text-white transition-colors">Activities</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-[#88998C] text-sm mt-12 md:mt-0">
                            &copy; 2025 Robotic ITK.
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default FooterNew;
