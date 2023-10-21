'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Bebedouro Portatil',
        price: 32.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/bebedouro_portatil.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Brinquedo de Mola',
        price: 7.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/bebedouro_portatil.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Brinquedo Osso Dog',
        price: 8.90,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/bebedouro_portatil.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Caixa de Transporte',
        price: 54.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/caixa_de_transporte.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Caminha Pata',
        price: 29.90,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/caminha_pata.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Caminha Pet',
        price: 31.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/caminha_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Bandana',
        price: 11.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_bandana.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Cat Dog',
        price: 9.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_cat_dog.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar GPS',
        price: 27.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_gps.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Patinha Pet',
        price: 9.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_patinha_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Pet Coração',
        price: 5.89,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_pet_coracao.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Sino',
        price: 10.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_sino.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dedo Escova Dental',
        price: 20.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/dedo_escova_dental.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dedo Escova Dental Simples',
        price: 5.89,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/dedo_escova_dental_simples.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Fralda Pet',
        price: 29.95,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/fralda_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Colar Pet Coração',
        price: 5.89,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/colar_pet_coracao.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gravatinha Natalina Pet',
        price: 21.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/gravatinha_natalina_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Gravatinha Pet',
        price: 24.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/gravatinha_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Lacinho Pet',
        price: 25.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/lacinho_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luva Escova',
        price: 41.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/luva_escova.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mordedor Chupeta',
        price: 11.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/mordedor_chupeta.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Osso Escova Brinquedo',
        price: 9.00,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/osso_escova_brinquedo.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Potinho Ração Água',
        price: 19.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/potinho_racao_agua.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Potinho Ração Água Bottle',
        price: 21.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/potinho_racao_agua_bottle.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'RG Pet',
        price: 28.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/rg_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'RG Pet Simples',
        price: 19.99,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/rg_pet_simples.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Travesseiro Pet',
        price: 9.90,
        description: 'lorem lorem lorem lorem lorem lorem',
        in_stock: true,
        picture: 'https://atespets.com.br/products/travesseiro_pet.jpeg',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};