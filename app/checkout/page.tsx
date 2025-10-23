"use client"

import { Button } from "@/components/ui/Button"
import InputText from "@/components/ui/InputText"
import { useState } from "react"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("pix")

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-xl font-semibold mb-4">Dados do Comprador</h2>
        <form className="space-y-4">
          <InputText
            type="text"
            placeholder="Nome completo"
          />
          <InputText
            type="email"
            placeholder="E-mail"
          />
          <InputText
            type="text"
            placeholder="CPF"
          />
        </form>

        <h2 className="text-xl font-semibold mt-8 mb-4">Forma de Pagamento</h2>
        <div className="flex gap-3">
          {["pix", "cartao", "boleto"].map((method) => (
            <Button
              key={method}
              variant={paymentMethod === method ? "default" : "outline"}
              onClick={() => setPaymentMethod(method)}
            >
              {method === "pix" && "Pix"}
              {method === "cartao" && "Cartão"}
              {method === "boleto" && "Boleto"}
            </Button>
          ))}
        </div>
      </section>

      <section className="bg-white border rounded-2xl p-6 shadow-sm h-fit">
        <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>

        <ul className="divide-y">
          <li className="flex justify-between py-2">
            <span>Produto 1</span>
            <span>R$ 199,90</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Produto 2</span>
            <span>R$ 89,90</span>
          </li>
        </ul>

        <div className="flex justify-between font-semibold mt-4 border-t pt-4">
          <span>Total</span>
          <span>R$ 289,80</span>
        </div>

        <Button className="w-full mt-6">Finalizar Compra</Button>
      </section>
    </div>
  )
}
