import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import RevealOnScroll from '../components/RevealOnScroll';
import { Card, CardImage, CardHeader, CardBody, CardFooter } from '../components/common/Card';
import { EmptyState } from '../components/common/EmptyState';
import Tooltip from '../components/common/Tooltip';
import SocialLinks from '../components/common/SocialLinks';

const PRODUCTS = [
  { id: 'rose', name: 'Buquê de Rosas', price: 'R$ 79,90', img: '/img/images.jfif', description: 'Um lindo buquê com rosas vermelhas frescas, perfeito para momentos especiais. Cada rosa é cuidadosamente selecionada para garantir qualidade e beleza.', details: 'Contém 12 rosas vermelhas premium, acompanhadas de folhagem verde. Entrega em embalagem premium com cuidados especiais.' },
  { id: 'tulip', name: 'Tulipas Sortidas', price: 'R$ 59,90', img: '/img/images (1).jfif', description: 'Tulipas coloridas trazem alegria e modernidade. Um arranjo vibrante que ilumina qualquer ambiente.', details: 'Mix de 15 tulipas em cores variadas. Perfeito como presente ou decoração.' },
  { id: 'orchid', name: 'Orquídea Elegante', price: 'R$ 129,90', img: '/img/images.jfif', description: 'Uma orquídea sofisticada que representa elegância e delicadeza em sua forma mais pura.', details: 'Orquídea premium com floração duradoura. Inclui vasos decorativos e cuidados básicos.' },
  { id: 'sunflower', name: 'Mio Girassole', price: 'R$ 89,90', img: '/img/images (1).jfif', description: 'Girassóis radiantes que trazem a energia do sol para o seu dia.', details: '8 girassóis frescos com folhagem complementar. Ótimo para decoração ou presente.' },
  { id: 'lily', name: 'Lirio do Vale', price: 'R$ 69,90', img: '/img/images.jfif', description: 'Lírios delicados com aroma envolvente que complementam qualquer ambiente.', details: 'Buquê com 6 lírios brancos. Perfeito para eventos elegantes.' },
  { id: 'daisy', name: 'Margarida', price: 'R$ 99,90', img: '/img/images (1).jfif', description: 'Margaridas são símbolos de inocência e alegria. Um presente clássico e sempre bem-vindo.', details: '20 margaridas frescas em cores sortidas. Ideal para qualquer ocasião.' },
  { id: 'gerbera', name: 'Gerberas', price: 'R$ 139,90', img: '/img/images.jfif', description: 'Gerberas vibrantes em cores quentes que iluminam e trazem vida ao ambiente.', details: '6 gerberas de cor única ou sortidas. Flores de longa duração.' },
  { id: 'lavender', name: 'Lavanda', price: 'R$ 49,90', img: '/img/images (1).jfif', description: 'Lavanda aromática traz serenidade e um perfume natural encantador.', details: 'Buquê de lavanda seca. Perfeito para aromatizar ambientes.' },
  { id: 'hydrangea', name: 'Hortênsia', price: 'R$ 149,90', img: '/img/images.jfif', description: 'Hortênsias cheias e volumosas criam arranjos impressionantes e sofisticados.', details: '3-4 hastes de hortênsia em cores variadas. Flores de longa duração.' },
];

export default function ProductDetailPage({ language = 'pt' }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { success, error } = useToast();
  const [quantity, setQuantity] = useState(1);

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

  const product = PRODUCTS.find((p) => p.id === productId);
  const recommendedProducts = PRODUCTS.filter((p) => p.id !== productId).slice(0, 3);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      error(t.quantity_error);
      return;
    }
    success(`${t.addedToCart}`);
    console.log(`Adicionado: ${product.name} x ${quantity}`);
  };

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
          {/* Product Image */}
          <Card hover={false}>
            <CardImage src={product.img} alt={product.name} height="h-80" />
          </Card>

          {/* Product Info */}
          <div>
            <CardHeader title={product.name} />

            <div className="mb-6">
              <p className="text-2xl font-bold text-emerald-600 mb-2">{product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mb-6">
                <p className="text-sm text-gray-700">{product.details}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-black mb-2">{t.quantity}</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 bg-gray-300 hover:bg-gray-400 rounded"
                >
                  −
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

            {/* Add to Cart Button */}
            <Tooltip text={t.addToCart} position="top">
              <button
                onClick={handleAddToCart}
                className="w-full mb-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition"
              >
                🛒 {t.addToCart}
              </button>
            </Tooltip>

            {/* Share Section */}
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-black mb-3">{t.share}:</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">{t.recommended}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedProducts.map((p) => (
                <Card key={p.id} hover className="cursor-pointer" onClick={() => navigate(`/product/${p.id}`)}>
                  <CardImage src={p.img} alt={p.name} />
                  <CardHeader title={p.name} />
                  <CardFooter>
                    <span className="font-bold text-emerald-600">{p.price}</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm">
                      Ver →
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
