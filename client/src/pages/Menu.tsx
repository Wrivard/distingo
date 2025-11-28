import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

// Import food images
import steakImage from '@assets/generated_images/gourmet_steak_frites_dish.png';
import cocktailImage from '@assets/generated_images/signature_craft_cocktail_in_crystal_glass.png';
import tableImage from '@assets/generated_images/cozy_bistro_table_setting_detail.png';
import interiorImage from '@assets/generated_images/upscale_cozy_gastropub_interior_at_night.png';

// Types
type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image?: string;
};

type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: 'entrees',
    title: 'Entrées',
    items: [
      { name: 'Tartare de Bœuf', description: 'Filet de bœuf coupé au couteau, câpres, échalotes, jaune d\'œuf, crostini', price: '18$', tag: 'Populaire', image: steakImage },
      { name: 'Frites à la Truffe', description: 'Frites maison, parmesan, huile de truffe, aïoli à l\'ail', price: '12$', tag: 'V', image: tableImage },
      { name: 'Salade Burrata', description: 'Tomates ancestrales, basilic frais, glaçage balsamique, croustille au levain', price: '21$', tag: 'V', image: tableImage },
      { name: 'Calamars Croustillants', description: 'Légèrement panés, poivre citronné, trempette marinara', price: '16$', image: steakImage },
      { name: 'Soupe à l\'Oignon', description: 'Oignons caramélisés, bouillon de bœuf, sherry, gratiné au gruyère', price: '14$', image: tableImage },
    ]
  },
  {
    id: 'plats',
    title: 'Plats Principaux',
    items: [
      { name: 'Steak Frites', description: 'Contre-filet AAA 10oz, sauce au poivre, frites maison', price: '34$', tag: 'Signature', image: steakImage },
      { name: 'Confit de Canard', description: 'Cuisse croustillante, risotto aux champignons sauvages, glaçage aux cerises', price: '29$', image: steakImage },
      { name: 'Burger Distingo', description: 'Bœuf Wagyu, cheddar vieilli, confiture de bacon, roquette, pain brioché', price: '24$', image: steakImage },
      { name: 'Saumon Poêlé', description: 'Saumon de l\'Atlantique, asperges, beurre blanc citron-aneth', price: '28$', image: tableImage },
      { name: 'Raviolis aux Champignons', description: 'Farcis à la ricotta, sauce crémeuse à la truffe, pignons de pin grillés', price: '26$', tag: 'V', image: tableImage },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { name: 'Crème Brûlée', description: 'Crème vanille classique, croûte de sucre caramélisé', price: '10$', image: tableImage },
      { name: 'Mousse au Chocolat Noir', description: '70% cacao, fleur de sel, coulis de framboise', price: '11$', image: tableImage },
      { name: 'Pouding au Caramel', description: 'Gâteau aux dattes chaud, sauce caramel, glace vanille', price: '12$', image: tableImage },
    ]
  },
  {
    id: 'boissons',
    title: 'Boissons',
    items: [
      { name: 'Old Fashioned', description: 'Bourbon, amers, sucre, zeste d\'orange', price: '14$', image: cocktailImage },
      { name: 'Espresso Martini', description: 'Vodka, kahlua, espresso frais', price: '15$', image: cocktailImage },
      { name: 'IPA Locale', description: 'Pinte en fût (16oz)', price: '9$', image: interiorImage },
      { name: 'Vin Maison Rouge/Blanc', description: 'Verre (6oz)', price: '10$', image: interiorImage },
    ]
  }
];

// Menu Item Component with hover image preview (desktop) and always-visible image (mobile)
function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Mobile/Tablet Layout - Image always visible */}
      <div className="lg:hidden">
        <div className="flex gap-4 py-5 border-b border-border/30">
          {/* Image thumbnail */}
          {item.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden ring-1 ring-accent/20"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-serif text-foreground">{item.name}</h3>
                {item.tag && (
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <span className="text-xl font-serif text-cream font-semibold flex-shrink-0">{item.price}</span>
            </div>
            <p className="text-sm text-muted-foreground elegant-italic line-clamp-2">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Hover image preview */}
      <div className="hidden lg:block">
        <div className="flex justify-between items-start border-b border-border/30 py-6 hover:bg-card/50 px-4 -mx-4 rounded-sm transition-all duration-500 cursor-pointer relative overflow-visible">
          {/* Left accent bar on hover */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-accent transition-all duration-500 rounded-full" />
          
          <div className="flex-1 pr-8 pl-2">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-0 group-hover:text-cream transition-colors duration-500">
                {item.name}
              </h3>
              {item.tag && (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2.5 py-1 rounded-full">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="text-base text-muted-foreground elegant-italic group-hover:text-foreground/70 transition-colors duration-500">
              {item.description}
            </p>
          </div>
          <div className="text-2xl md:text-3xl font-serif text-cream font-semibold group-hover:scale-110 transition-transform duration-500">
            {item.price}
          </div>
        </div>

        {/* Floating Image Preview - Desktop only */}
        <AnimatePresence>
          {isHovered && item.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: cursorPos.x + 30,
                top: cursorPos.y - 120,
              }}
              exit={{ opacity: 0, scale: 0.6, y: 20 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed pointer-events-none z-[100]"
              style={{ left: 0, top: 0 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full" />
                
                {/* Image container with fancy border */}
                <div className="relative w-52 h-52 rounded-lg overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-accent/40">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-accent/30 animate-pulse" />
                  
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Item info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-accent text-xs uppercase tracking-wider mb-1">Distingo</p>
                    <p className="text-cream text-base font-serif font-medium leading-tight">{item.name}</p>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/50" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('entrees');

  return (
    <Layout>
      <div className="bg-background min-h-screen pb-24">
        {/* Header */}
        <div className="bg-primary/0 py-24 md:py-32 text-center overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="eyebrow text-gold mb-4"
              >
                Saveurs d'Exception
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-primary-foreground mb-6"
              >
                Notre Menu
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light"
              >
                Plats d'inspiration saisonnière élaborés avec des ingrédients locaux soigneusement sélectionnés.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="container mx-auto px-4 max-w-4xl -mt-8">
          <Tabs defaultValue="entrees" onValueChange={setActiveTab} className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mb-12 lg:mb-16"
            >
              <TabsList className="bg-card/80 backdrop-blur-sm p-1.5 sm:p-2 h-auto flex-wrap justify-center border border-border/50 rounded-sm">
                {menuData.map((category, i) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  >
                    <TabsTrigger 
                      value={category.id}
                      className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-lg font-serif data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm transition-all duration-300 rounded-sm"
                    >
                      {category.title}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </motion.div>

            {menuData.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-0 lg:space-y-2"
                >
                  {category.items.map((item, index) => (
                    <MenuItemCard key={index} item={item} index={index} />
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Hint text - Desktop only */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8 mb-8 hidden lg:block"
          >
            <p className="text-muted-foreground/60 text-sm italic">
              ✨ Survolez les plats pour voir un aperçu
            </p>
          </motion.div>
          
          {/* Note */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12 lg:mt-4"
          >
            <div className="divider-gold" />
            <p className="text-muted-foreground text-base mt-8">
              <span className="text-gold font-medium">V</span> = Végétarien • Veuillez informer votre serveur de toute allergie alimentaire.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
