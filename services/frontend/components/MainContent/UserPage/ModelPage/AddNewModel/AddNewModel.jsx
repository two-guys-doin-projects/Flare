import { useState } from 'react'
import './AddNewModel.css'

function AddNewModel() {
    const [createModelForm, setCreateModelForm] = useState(
        {
            modelName: "", 
            inputSize: 0, 
            hiddenSize: 0, 
            numLayers: 0, 
            outputSize: 0
        }
    )

    function handleChange(event) {
        const { name, value } = event.target
        setCreateModelForm(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "input_size" : createModelForm.inputSize,
                "hidden_size": createModelForm.hiddenSize,
                "num_layers": createModelForm.numLayers,
                "output_size": createModelForm.outputSize 
            })
        };
        try {
            const data = ( fetch(`http://0.0.0.0:8082/model/create?name=${createModelForm.modelName}&type=neural`, requestOptions))
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <form className='form--nn' onSubmit={handleSubmit}>
  <label htmlFor="modelName">Nazwa modelu</label>
  <input
    type="text"
    placeholder="Nazwa modelu"
    name="modelName"
    onChange={handleChange}
    value={createModelForm.modelName}
  />
  <label htmlFor="inputSize">Wielkość wejścia</label>
  <input
    type="number"
    placeholder="Wielkość wejścia"
    name="inputSize"
    onChange={handleChange}
    value={createModelForm.inputSize}
  />
  <label htmlFor="hiddenSize">Ilość warstw ukrytych</label>
  <input
    type="number"
    placeholder="Ilość warstw ukrytych"
    name="hiddenSize"
    onChange={handleChange}
    value={createModelForm.hiddenSize}
  />
  <label htmlFor="numLayers">Ilość warstw</label>
  <input
    type="number"
    placeholder="Ilość warstw"
    name="numLayers"
    onChange={handleChange}
    value={createModelForm.numLayers}
  />
  <label htmlFor="outputSize">Wielkość wyjścia</label>
  <input
    type="number"
    placeholder="Wielkość wyjścia"
    name="outputSize"
    onChange={handleChange}
    value={createModelForm.outputSize}
  />
  <button type="submit">Dodaj model</button>
</form>

    )
}

export default AddNewModel;
