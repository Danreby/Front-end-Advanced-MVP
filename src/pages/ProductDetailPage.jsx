import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import RevealOnScroll from '../components/RevealOnScroll';
import { Card, CardImage, CardHeader, CardBody, CardFooter } from '../components/common/Card';
import { EmptyState } from '../components/common/EmptyState';
import Tooltip from '../components/common/Tooltip';
import SocialLinks from '../components/common/SocialLinks';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useProducts } from '../hooks/useProducts';

export default function ProductDetailPage({ language = 'pt' }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [quantity, setQuantity] = useState(1);
  const { products, loading, error: loadError } = useProducts();

  const texts = useMemo(() => ({
    pt: {
      title: 'Detalhes do Produto',
      description: 'Descrição',
      details: 'Detalhes',
      price: 'Preço',
      quantity: 'Quantidade',
      addToCart: 'Adicionar ao Carrinho',
      backToShop: 'Voltar à Loja',
      productNotFound: 'Produto não encontrado',
      productNotFoundDesc: 'Desculpe, este produto não existe em nosso catálogo.',
      addedToCart: 'Produto adicionado ao carrinho!',
      share: 'Compartilhar',
      recommended: 'Produtos Recomendados',
      quantity_error: 'Quantidade deve ser maior que 0',
    },
    en: {
      title: 'Product Details',
      description: 'Description',
      details: 'Details',
      price: 'Price',
      quantity: 'Quantity',
      addToCart: 'Add to Cart',
      backToShop: 'Back to Shop',
      productNotFound: 'Product not found',
      productNotFoundDesc: 'Sorry, this product does not exist in our catalog.',
      addedToCart: 'Product added to cart!',
      share: 'Share',
      recommended: 'Recommended Products',
      quantity_error: 'Quantity must be greater than 0',
    },
  }), []);

  const t = texts[language] || texts.pt;
  const product = useMemo(
    () => products.find((p) => p.id === productId),
    [products, productId]
  );
  const recommendedProducts = useMemo(
    () => products.filter((p) => p.id !== productId).slice(0, 3),
    [products, productId]
  );

  const handleAddToCart = () => {
    if (quantity <= 0) {
      error(t.quantity_error);
      return;
    }
    success(`${t.addedToCart}`);
    const nameForLog = language === 'pt' ? product.name : (product.name_en || product.name);
    console.log(`Adicionado: ${nameForLog} x ${quantity}`);
  };

  if (loading) {
    return (
      <section className="min-h-[60vh] p-6 max-w-6xl mx-auto flex items-center justify-center">
        <LoadingSpinner size="lg" text={language === 'pt' ? 'Carregando produto...' : 'Loading product...'} />
      </section>
    );
  }

  if (loadError) {
    return (
      <section className="min-h-[60vh] p-6 max-w-6xl mx-auto flex items-center justify-center">
        <RevealOnScroll>
          <EmptyState
            icon="⚠️"
            title={language === 'pt' ? 'Erro ao carregar dados' : 'Error loading data'}
            description={language === 'pt' ? 'Não foi possível carregar os detalhes do produto.' : 'Could not load product details.'}
            action={
              <button
                onClick={() => navigate('/shop')}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
              >
                {language === 'pt' ? 'Voltar à loja' : 'Back to shop'}
              </button>
            }
          />
        </RevealOnScroll>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="min-h-[60vh] p-6 max-w-6xl mx-auto flex items-center justify-center">
        <RevealOnScroll>
          <EmptyState
            icon="🔍"
            title={t.productNotFound}
            description={t.productNotFoundDesc}
            action={
              <button
                onClick={() => navigate('/shop')}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
              >
                {t.backToShop}
              </button>
            }
          />
        </RevealOnScroll>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] p-6 max-w-6xl mx-auto">
      <RevealOnScroll>
        <button
          onClick={() => navigate('/shop')}
          className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg font-medium transition"
        >
          ← {t.backToShop}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card hover={false}>
            <CardImage
              src={product.img}
              alt={language === 'pt' ? product.name : (product.name_en || product.name)}
              height="h-80"
            />
          </Card>

          <div>
            <CardHeader
              title={language === 'pt' ? product.name : (product.name_en || product.name)}
            />

            <div className="mb-6">
              <p className="text-2xl font-bold text-emerald-600 mb-2">
                {language === 'pt' ? product.price : (product.price_en || product.price)}
              </p>
              <p className="text-gray-600 mb-4">
                {language === 'pt' ? product.description : (product.description_en || product.description)}
              </p>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-6">
                <p className="text-sm text-gray-700">
                  {language === 'pt' ? product.details : (product.details_en || product.details)}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">{t.quantity}</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border border-gray-300 rounded py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <Tooltip text={t.addToCart} position="top">
              <button
                onClick={handleAddToCart}
                className="w-full mb-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
              >
                🛒 {t.addToCart}
              </button>
            </Tooltip>

            <div className="border-t pt-4">
              <p className="text-sm font-medium text-black mb-3">{t.share}:</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {recommendedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">{t.recommended}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((p) => (
                <Card key={p.id} hover className="cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                  <CardImage src={p.img} alt={p.name} />
                  <CardHeader title={language === 'pt' ? p.name : (p.name_en || p.name)} />
                  <CardFooter>
                    <span className="font-bold text-emerald-600">
                      {language === 'pt' ? p.price : (p.price_en || p.price)}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                      {language === 'pt' ? 'Ver →' : 'View →'}
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
}
