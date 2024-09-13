// Import necessary types
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useOptionsStore from '@/stores/useOptionsStore';
import UseFavoriteStore from '@/stores/useFavoriteStore';
import useShoppingCartStore from '@/stores/useShoppingCartStore';
import { Link as ScrollLink } from 'react-scroll';
import Cart from './cart';
import Menu from './menu';
import SearchInput from './searchInput';
import InterestList from './interestList';
import Categorys from '@/models/categorys';
import Brands from '@/models/brands';
import HeaderIcons from '@/module/headerIcons';
import HeaderLinks from '@/models/headerLinks';
import HeaderLogo from '@/models/headerLogo';
import { OptionsData } from '@/types/optionsStoreTypes';



const Header: React.FC = () => {
    const currentPage = usePathname();
    const { options, getOptionsFromApi } = useOptionsStore();
    const { favorites, fetchFavorites } = UseFavoriteStore(state => state);
    const { cartDetails } = useShoppingCartStore();
    const [isOpen, setIsOpen] = useState({
        cart: false,
        menu: false,
        search: false,
        interest: false,
    });
    const [isVisible, setIsVisible] = useState(false);
    const [categories, setCategories] = useState(false);
    const [brand, setBrand] = useState(false);
    const [optionsData, setOptionsData] = useState<OptionsData>({
        logo: '',
        sitename: '',
        description: '',
        phone_support: '',
        email_support: '',
        address: '',
        address_2: '',
        instagram: '',
        whatsApp: '',
        telegram: '',
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        getOptionsFromApi();
        fetchFavorites();
    }, [getOptionsFromApi, fetchFavorites]);

    useEffect(() => {
        if (options) {
            setOptionsData({
                logo: options?.information_site?.logo2 || '',
                sitename: options?.information_site?.sitename || '',
                description: options?.information_site?.description || '',
                phone_support: options?.business_information?.phone_support || '',
                email_support: options?.business_information?.email_support || '',
                address: options?.business_information?.address || '',
                address_2: options?.business_information?.address_2 || '',
                instagram: options?.social?.instagram || '',
                whatsApp: options?.social?.whatsApp || '',
                telegram: options?.social?.telegram || '',
            });
        }
    }, [options]);

    const handleIconClick = (iconName: 'cart' | 'menu' | 'search' | 'interest') => {
        setIsOpen(prevState => ({
            ...prevState,
            [iconName]: !prevState[iconName],
        }));
    };

    return (
        <div className={`${currentPage === '/' ? 'bg-white' : 'bg-A'} w-full h-20 fixed top-0 z-20 shadow`}>
            <div className={`flex justify-between items-center p-3 w-full ${isVisible ? 'animate__animated animate__zoomInUp' : 'animate__fadeInDown animate__animated'}`}>
                <HeaderLogo logo={optionsData.logo} />
                <HeaderLinks currentPage={currentPage} setCategories={setCategories} setBrand={setBrand} />
                <HeaderIcons
                    handleIconClick={handleIconClick}
                    favorites={favorites}
                    cartDetails={cartDetails}
                    currentPage={currentPage}
                />
            </div>
            {isOpen.cart && <Cart onClose={() => handleIconClick('cart')} />}
            {isOpen.menu && <Menu onClose={() => handleIconClick('menu')} />}
            {isOpen.search && <SearchInput onClose={() => handleIconClick('search')} />}
            {isOpen.interest && <InterestList onClose={() => handleIconClick('interest')} />}
            {categories && (
                <div className="w-80 absolute right-[520px] top-12 z-50" onMouseEnter={() => setCategories(true)} onMouseLeave={() => setCategories(false)}>
                    <Categorys />
                </div>
            )}
            {brand && (
                <div className="w-40 absolute top-12 right-[520px] z-50" onMouseEnter={() => setBrand(true)} onMouseLeave={() => setBrand(false)}>
                    <Brands />
                </div>
            )}
        </div>
    );
}

export default Header;
